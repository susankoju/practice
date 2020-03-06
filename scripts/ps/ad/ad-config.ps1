#list modules
#Get-Module

#import ADDS Deployment module
Import-Module ADDSDeployment

#list forest
#Get-ADForest

#configure domain controller in forest
Install-ADDSForest -DomainName "ad.com" -InstallDns -ForestMode Win2012 -DomainMode Win2012 -SafeModeAdministratorPassword (ConvertTo-SecureString -String password -AsPlainText -Force)
