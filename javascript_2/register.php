<?php
/* register.php */

header("Content-type: text/plain");

/*
NOTA: Nunca debe usar `print_r()` en scripts de producción, o
o datos enviados por el cliente sin sanearlos antes.
No sanearlos puede llevar a vulnerabilidades tipo _cross-site scripting_.
*/

echo ":: Datos recibidos a través de GET ::\n\n";
print_r($_GET);

echo "\n\n:: Datos recibidos a través de POST ::\n\n";
print_r($_POST);

echo "\n\n:: Datos recibidos \"sin procesar\" (text/plain encoding) ::\n\n";
if (isset($HTTP_RAW_POST_DATA)) { echo $HTTP_RAW_POST_DATA; }

echo "\n\n:: Archivos recibidos ::\n\n";
print_r($_FILES);
