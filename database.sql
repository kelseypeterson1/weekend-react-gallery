CREATE TABLE gallery (
	id SERIAL,
	name varchar(50),
	url varchar(500),
    likes integer default 0
);

INSERT INTO "gallery" 
	("name", "url") 
VALUES
	('Kangaroo', 'http://www.plushzoo.com.au/assets/webshop/cms/03/103.jpg?1498954083'),
	('Panda', 'https://i5.walmartimages.com/asr/04ace033-17e8-4ee9-b8e8-bfbf96a9419f_1.9a98b7edf184494e29ad31887cf86989.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff'),
	('Turtle', 'https://www.kroger.com/product/images/medium/front/0001196450586'),
	('Stitch', 'https://cdn.shopify.com/s/files/1/2433/3849/products/disney-stitch-plush-from-lilo-and-stitch-stuffed-animal-toy-7-inches-27763675_200x200.jpg?v=1602218585'),
	('Pig', 'https://cdn.shopify.com/s/files/1/0248/6124/5518/products/pink-ham_front-stuffed-animal-ping-pig-smile_200x200.jpg?v=1570131911'),
	('Elephant', 'https://www.kroger.com/product/images/medium/front/0001196449497'),
	('Bunny', 'https://i.pinimg.com/236x/92/14/61/92146159f8004a21cec7200ba4a6ba80--embroidery-supplies-mobile-baby.jpg'),
	('Dragon', 'https://stoysnetcdn.com/tgtg/tgtg_ho21_4633/tgtg_ho21_4633.200x200.121a7.jpg'),
	('Meerkat', 'https://cdn.faire.com/fastly/3090288eb73ad083264ea450082a9a0552385209962483b5f03ef106167ed73f.jpeg?bg-color=FFFFFF&canvas=300:300&dpr=1&fit=bounds&format=jpg&height=300&width=300'),
	('Unicorn', 'https://i5.walmartimages.com/asr/9c549694-60b5-4a0b-9fac-c526de8e0def.a86e0e7775e2f954db7dc3f6d869e876.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff'),
	('Blue jay', 'https://www.kroger.com/product/images/medium/front/0009238918225'),
	('Hedgehog', 'https://blog.sulky.com/wp-content/uploads/2016/02/hedgehog-eb.png'),
	('Lion', 'https://cdn.shopify.com/s/files/1/0066/1399/1512/products/full_349a117c-62a4-41d4-a48e-651b508c25ad_200x200.jpg?v=1575397476'),
	('Raccoon', 'https://stoysnetcdn.com/wldr/wldr10943/wldr10943.200x200.dbb1b.jpg');