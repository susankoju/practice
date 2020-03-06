Get-NetFirewallRule -DisplayName "Inbound*" 
#Get-NetFirewallPortFilter | Where-Object -Property { $_.LocalPort -eq "22"}


function allow($direction, $port) {
    Write-Host "$port"
    $name = $direction + ' ' + $port    
    New-NetFirewallRule -DisplayName "$name" -Direction "$direction" -LocalPort $port -Action Allow -Protocol "TCP"
}

allow("Inbound")(80)
allow("Inbound")(21)
allow("Inbound")(22)
allow("Inbound")(443)



<#

Set-NetFirewallRule -DisplayName "http" -LocalPort 80

Test-NetConnection localhost -Port 80
netsh firewall show state

#>