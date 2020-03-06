#For syntax help
#Get-Command New-ADUser -Syntax

#To see users
#Get-ADUser -Filter *

#To remove users
#Remove-ADUser -Identity Tester -Confirm:0

#to add user
New-ADUser `
-Name "Tester" `
-AccountPassword (ConvertTo-SecureString -String password123* -AsPlainText -Force) `
-ChangePasswordAtLogon 1 `
-Department "tester" `
-Enabled 1
