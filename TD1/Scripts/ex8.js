$("li:first-child").addClass('orange').addClass('violet');
$("li:last-child").addClass('violet');
$("h1, h2, h3, h4, h5, h6").addClass('italic');
$("p").addClass('gras');

$("li:first-child").removeClass('violet');

$("h1").addClass('violet').addClass('orange');
// la classe orange est la dernière à être appelée, elle prend le pas sur le violet