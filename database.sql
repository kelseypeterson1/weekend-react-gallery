CREATE TABLE gallery (
	id SERIAL,
	name varchar(50),
	url varchar(500),
);

INSERT INTO "gallery" 
	("name", "url") 
VALUES
	('Unicorn', 'https://cdn11.bigcommerce.com/s-sjl48p9/images/stencil/100x100/products/1956/2217/plush-toy-stuffed-animal-unicorn-wholesale__39538.1527271841.jpg?c=2'),
	('Narwhal', 'https://cdn.shopify.com/s/files/1/2284/6393/products/fao-schwarz-plush-17-narwhal-plush-stuffed-animal-toy-with-led-lights-and-sound-28341322580055_small.jpg?v=1634093838'),
	('Dragon', 'https://target.scene7.com/is/image/Target/GUEST_01e4b6cc-4bd1-4be5-9370-3f44314778db?wid=100&hei=100&fmt=pjpeg'),
	('Elephant', 'https://i5.walmartimages.com/asr/56ca6756-febf-4362-953b-df02a2b8a43d.3a22d4cb9eb47698b0bd75efce022fb0.jpeg?odnWidth=100&odnHeight=100&odnBg=ffffff'),
	('Eevie', 'https://regisbox.com/wp-content/uploads/2021/03/glaceon-plush-toy-cute-pokemon-stuffed-animal-eeveelution-doll-regisbox-pokemon-gift-100x100.jpg'),
	('Raccoon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIFnZ0PcQuMKcv5R4blFyjRqJnXKUQjuySA&usqp=CAU'),
	('Kangaroo', 'https://cdn.shopify.com/s/files/1/0208/4678/products/KAR4K_100x100.jpg?v=1634238060'),
	('Panda', 'https://img.grouponcdn.com/stores/4S8T1r7S2Mbc48dYRbSzDbRn68EJ/storesoi13570137-3600x2160/v1/sc100x100.jpg'),
	('Dinosaur', 'https://downtownoutbound.com/wp-content/uploads/2020/12/TH-479920210916_185614-100x100.jpg'),
	('Corgi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6F7plDQ2-2TDymr1hXySuRgcMIkcNM25Xg&usqp=CAU');