/** starter guide */
create github account
download and install sourcetree
install git on local machine
clone bootcamp repo
make sure all commits go into dev branch

/** create subdomain for local project */
xampp > apache > conf > extra > httpd-vhosts.conf
<Directory C:/XAMPP7/htdocs>
    AllowOverride All
    Require all granted
</Directory>
<VirtualHost *:80>
    DocumentRoot "C:/XAMPP7/htdocs/"
    ServerName localhost
</VirtualHost>
<VirtualHost *:80>
    DocumentRoot "C:/XAMPP7/htdocs/bootcamp/"
    ServerName bootcamp.localhost
    SetEnv NS_ENV variable_value
</VirtualHost>
c: > windows > system32 > drivers > etc > hosts
add 127.0.0.1 to hosts file, copy first to desktop, replace with desktop file

/** others */
BEM methodology for CSS
vanilla js & jquery, how to select, navigate and manipulate the DOM

/** php proper */
http://wiki.hashphp.org/PDO_Tutorial_for_MySQL_Developers