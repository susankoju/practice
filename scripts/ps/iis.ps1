
#Get-Module

#Get-WindowsFeature -Name Web-Server

if ((Get-WindowsFeature Web-server).InstallState -ne "Installed"){
    Write-Host "IIS is not installed! Installing now..."
    Install-WindowsFeature -Name Web-Server -IncludeManagementTools   
    Write-Host "IIS installed"
}


function clearBinding($port){
    #$port = 80
    if((Get-WebBinding -Port $port).length -gt 0) {
        Remove-WebBinding -Port $port
    }
}


Remove-IISSite -Name "Default Web Site"

clearBinding(80)
if((Get-Website -Name "TestSite").length -gt 0){
    Write-Host "TestSite is already here"
    Remove-IISSite -Name "TestSite" -Confirm:$false
}
New-IISSite -Name "TestSite" -PhysicalPath "$env:SystemDrive\inetpub\wwwroot" -BindingInformation "*:80:"

New-IISSiteBinding -Name "TestSite" -BindingInformation "*:80:" -Protocol http

clearBinding(443)
New-IISSiteBinding -Name "TestSite" -BindingInformation "*:443:" -Protocol https

Start-IISSite -Name "TestSite"
#Stop-IISSite -Name "TestSite" -Confirm:$false

#Website
New-Website -Name TestWebsite -Port 80 -IPAddress '127.0.0.2' -PhysicalPath "$env:SystemDrive\inetpub\wwwroot"
New-WebBinding -Name test.com -Port 80 -IPAddress '127.0.0.2' -Protocol http

# URL rewrite

Import-Module WebAdministration

Add-WebConfigurationProperty  -PSPath 'IIS:\Sites\TestSite' -Name "." -filter '/system.webserver/rewrite/rules' -Value @{name='rewrite';patternSyntax='ECMAScript';stopProcessing='True'}
Set-WebConfigurationProperty -PSPath 'IIS:\Sites\TestSite' -Name url -Value (@{protocol="http";bindingInformation="*:80:*fb"},@{protocol="http";bindingInformation="*:80:facebook.com"}) -Filter "/system.webserver/rewrite/rules/rule[@name=`"rewrite`"]/match" 


#try



#Add-WebConfigurationProperty -PSPath 'IIS:\Sites\TestSite' -Name "URL rewrite" -Value "facebook.com" -filter '/system.webserver/rewrite/rules/rule[@name="rewrite"]/condition'

Get-WebConfigurationProperty -Name * -Filter *

# try commands
<#
Get-Module
get-website -Verbose
Get-IISConfigSection
Get-IISAppPool
Get-IISSite
Start-IISSite -Name TestSite
Get-IISSiteBinding -Name "*"
Write-Host (Get-WebBinding -Port 443).Length
Get-IISConfigAttributeValue
Write-Host $env:SystemDrive
iisreset.exe
#>