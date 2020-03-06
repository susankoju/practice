#For syntax help
#Get-Command New-ADUser -Syntax

#To see users
Get-ADUser -Filter * -Properties "Name"

#To remove users
Remove-ADUser -Identity Tester -Confirm:0

#to add user
New-ADUser `
-Name "Tester" `
-AccountPassword (ConvertTo-SecureString -String password123* -AsPlainText -Force) `
-ChangePasswordAtLogon 1 `
-Department "tester" `
-Enabled 1

# To allow log on locally
Get-ADGroupMember "Administrators"
Add-ADGroupMember -Identity Administrators -Members Tester
gpupdate /force



# Other try  commands
#Get-ADGroup -Identity "Users" 


Search-ADAccount -LockedOut
Get-ADPrincipalGroupMembership Tester

Get-Command New-ADGroup -Syntax
New-ADGroup -Name "Users" -GroupScope DomainLocal
