from fabric.api import *


   # 'webservers': ['localhost', '127.0.0.2']        
#}

env.user = 'sasuke'

env.hosts = '127.0.0.2:2222'

def host_type():
    run('uname -s')



def uptime():
    run("uptime")

def copy_node_modules():
    run("mkdir -p ~/try")
    local("tar -cf node_modules.tar.gz node_modules")
    put("node_modules.tar.gz","~/try/")
    run("tar -xf ~/try/node_modules.tar.gz --directory ~/try")
    run("rm ~/try/node_modules.tar.gz")
    local("rm node_modules.tar.gz")

