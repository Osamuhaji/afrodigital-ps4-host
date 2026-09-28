# Afrodigital PS4 Host

Custom Afrodigital-branded PS4 host interface.

## Local test

From this folder run:

```powershell
py -m http.server 8080
```

Then open:

```text
http://127.0.0.1:8080/
```

For another device on the same network, use the PC's LAN IP:

```text
http://YOUR-PC-IP:8080/
```

## GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `css/`, `js/`, and `assets/`.
3. In repository Settings → Pages, publish the main branch.
4. Your site will receive a GitHub Pages address.

## Exploit integration

This package contains only the host interface and testing shell. If you integrate an open-source exploit component, follow its license, retain attribution, and use only versions that support your own test firmware.
