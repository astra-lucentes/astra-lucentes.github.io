Remove-Item "..\astra-compiled\*" -Exclude ".git"
Copy-Item -Path ".\out\*" -Destination "..\astra-compiled" -Recurse
New-Item "..\astra-compiled\.nojekyll" -type File