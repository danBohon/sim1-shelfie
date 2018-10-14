-- update product set (name, price, image) = ($2, $3, $4) where product_id = $1;


update product set name = $2 where product_id = $1;
update product set price = $3 where product_id = $1;
update product set image = $4 where product_id = $1;