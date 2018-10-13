drop table if exists product;

create table product (
    product_id serial primary key not null,
    name varchar(40) not null,
    price int not null,
    image text not null
);

INSERT INTO product (name, price, image) 
VALUES ('Product1', 75739, 'https://picsum.photos/200/300/?random' );

INSERT INTO product (name, price, image) 
VALUES ('Product2', 4965432, 'https://loremflickr.com/320/240' );

INSERT INTO product (name, price, image) 
VALUES ('Product3', 4254, 'https://loremflickr.com/320/240/dog' );

INSERT INTO product (name, price, image) 
VALUES ('Product4', 8685, 'https://loremflickr.com/g/320/240/paris' );

select * from product