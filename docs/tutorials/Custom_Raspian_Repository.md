---
description: Setting up a Custom Raspian Repository
---

# First steps

* Setup a Webserver (Apache)
* Create a directory for the files
* Create the .deb files and put them on the server with a Packages.gz file


A very basic structure would look like this:

```
/Packages.gz
/deb/.deb
```


Now you can install from the Raspberry Pi with apt-get.

First you add the server to a sources.list file.

We use   `/etc/apt/sources.list.d/amescon.list`

The contents of this file look like this:


```
deb http://archivedev.amescon.com/ ./
```

Than you can use apt-get update to add the server to the list of deb sources


```
root@raspberrypi:/# apt-get update
Hit:1 http://raspbian.raspberrypi.org/raspbian stretch InRelease
…
Fetched 775 B in 1s (675 B/s)
Reading package lists… Done
W: The repository 'http://archive.amescon.com ./ Release' does not have a Release file.
N: Data from such a repository can't be authenticated and is therefore potentially dangerous to use.
N: See apt-secure(8) manpage for repository creation and user configuration details.
```


The warning above is no nice, but it works.

We CAN install the packages now with

`root@raspberrypi:/# sudo apt-get install -y –allow-unauthenticated <package>`

But this is ugly.

To make for a smooth install experience we need to cryptographically sign things.

Surprise:
Not the actual.deb packages must be signed but the transfer channel needs some kind of authentication.
As of 2018 you CAN sign .deb packages but you don’t  have to do this in order to install them on remote machines.
It probably has to do with installing keys in your signature keychain, but we don’t care for now.

First we get rid off the apt-get update error by creating a Release file on the repository server.

`root@amesconservices:/var/www/archivedev# apt-ftparchive release . > Release`

On the Raspberry Pi we see a different warning now:


```
oot@raspberrypi:/etc/apt/sources.list.d# apt-get update
Hit:1 http://raspbian.raspberrypi.org/raspbian stretch InRelease
..
Fetched 1202 B in 1s (1074 B/s)
Reading package lists… Done
W: The repository 'http://archivedev.amescon.com ./ Release' is not signed.
N: Data from such a repository can't be authenticated and is therefore potentially dangerous to use.
N: See apt-secure(8) manpage for repository creation and user configuration details.
```


We should sign our repository.


# Creating a Keypad on the Server


You may need to nstall `rng-tools` to create some entropy on the server, otherwise `gpg –key-gen` will fail  later.

`sudo rngd -r /dev/urandom`


Now we can finally generate our keys.


## Generating Keys


```
root@amesconservices:/var/www/archivedev# gpg --gen-key
gpg (GnuPG) 1.4.20; Copyright (C) 2015 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
(1) RSA and RSA (default)
(2) DSA and Elgamal
(3) DSA (sign only)
(4) RSA (sign only)
Your selection? 1
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (2048)
Requested keysize is 2048 bits
Please specify how long the key should be valid.
0 = key does not expire
= key expires in n days
w = key expires in n weeks
m = key expires in n months
y = key expires in n years
Key is valid for? (0) 0
Key does not expire at all
Is this correct? (y/N) y

You need a user ID to identify your key; the software constructs the user ID
from the Real Name, Comment and Email Address in this form:
"Heinrich Heine (Der Dichter) heinrichh@duesseldorf.de"
Real name: Amescon Archive Operator
Email address: office@amescon.com
Comment:
You selected this USER-ID:
"Amescon Archive Operator office@amescon.com"
Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? o
You need a Passphrase to protect your secret key.

gpg: gpg-agent is not available in this sessionWe need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
…….+++++
…+++++
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
.+++++
…+++++
gpg: key 85856928 marked as ultimately trusted
public and secret key created and signed

gpg: checking the trustdb
gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
gpg: depth: 0 valid: 2 signed: 0 trust: 0-, 0q, 0n, 0m, 0f, 2u
pub 2048R/85856928 2018-10-03
Key fingerprint = 973D DA19 0F0E DDB8 6496 6864 79F3 A2E0 8585 6928
uid Amescon Archive Operator office@amescon.com
sub 2048R/56117949 2018-10-03
```

This looks like its gonna work out good… but it won't.

If you continue on this path you will end up with a cryptic error message on the RaspberryPi side once you try install from the signed repository.

`The following signatures were invalid: A71733F3CEBD655CB25A0DDCE1E3A497555CE68F`

See: https://unix.stackexchange.com/questions/387053/debian-9-apt-and-gpg-error-inrelease-the-following-signatures-were-inva#387054

So before we continue we shall fix the key so it does NOT include `SHA-1` anymore.



# SHA-1 Fix


```
root@amesconservices:/var/www/archivedev# gpg --edit-key "85856928"
gpg (GnuPG) 1.4.20; Copyright (C) 2015 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Secret key is available.

pub 2048R/85856928 created: 2018-10-03 expires: never usage: SC
trust: ultimate validity: ultimate
sub 2048R/56117949 created: 2018-10-03 expires: never usage: E
ultimate. Amescon Archive Operator office@amescon.com

gpg> showpref
ultimate. Amescon Archive Operator office@amescon.com
Cipher: AES256, AES192, AES, CAST5, 3DES
Digest: SHA256, SHA1, SHA384, SHA512, SHA224
Compression: ZLIB, BZIP2, ZIP, Uncompressed
Features: MDC, Keyserver no-modify
gpg>
```

You can see that SHA-1 is right there in the Digest as the second entry.
This is going to fail.

We must remove the SHA-1 with

```
gpg> setpref SHA512 SHA384 SHA256 SHA224 AES256 AES192 AES CAST5 ZLIB BZIP2 ZIP Uncompressed
Set preference list to:
Cipher: AES256, AES192, AES, CAST5, 3DES
Digest: SHA512, SHA384, SHA256, SHA224, SHA1
Compression: ZLIB, BZIP2, ZIP, Uncompressed
Features: MDC, Keyserver no-modify
Really update the preferences? (y/N) y

You need a passphrase to unlock the secret key for
user: "Amescon Archive Operator office@amescon.com"
2048-bit RSA key, ID 85856928, created 2018-10-03

gpg: gpg-agent is not available in this session

pub 2048R/85856928 created: 2018-10-03 expires: never usage: SC
trust: ultimate validity: ultimate
sub 2048R/56117949 created: 2018-10-03 expires: never usage: E
ultimate. Amescon Archive Operator office@amescon.com


gpg> quit
Save changes? (y/N) y
```


Ok so we now have a keypair that does not support SHA-1 \o/



# Export Public Key

Next we export our public key intp a human readable file format.

root@amesconservices:/var/www/archivedev# gpg –armor –export office@amescon.com > amescon.asc

This is the public key the Users on the Rasberry Pi side have to import so we put it right there into the repository.

To authenticate the repository you need to create a gpg keypair on the serverside and distribute the public key so that a client can import this into his keychain.
Once the client has that key we can make sure that the packages the server provides are the same as the hashes in the index on the server.

Now we have these files on the repository server:
* ./amescon.asc
* ./Release
* ./Packages.gz
* ./deb
* ./deb/<package>.deb


~ InRelease File

Now we need to create the InRelease file that contains the hashes of the files in the repository.

`gpg –clearsign -o InRelease Release`

This step seems to be optional needs testing from scratch

`gpg -abs -o Release.gpg Release`

On the Raspberry Pi side we now get the following output upon apt-get update


```
root@raspberrypi:/etc/apt/sources.list.d# apt-get update
Get:1 http://archivedev.amescon.com ./ InRelease [1724 B]
…
Fetched 1724 B in 6s (277 B/s)
Reading package lists… Done
W: GPG error: http://archivedev.amescon.com ./ InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 5969E6276CBB1458
W: The repository 'http://archivedev.amescon.com ./ InRelease' is not signed.
N: Data from such a repository can't be authenticated and is therefore potentially dangerous to use.
N: See apt-secure(8) manpage for repository creation and user configuration details.
```


So we need to import the public key on the raspberry pi side

`wget -qO – http://archivedev.amescon.com/amescon.asc | sudo apt-key add –
OK`

`root@raspberrypi:/etc/apt/sources.list.d# apt-get update
Hit:1 http://archivedev.amescon.com ./ InRelease
Reading package lists… Done`
