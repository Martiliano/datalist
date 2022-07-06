CREATE DATABASE products;

USE products;

CREATE TABLE IF NOT EXISTS `products` (
    `id` int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT ' ',
    `price` DOUBLE NOT NULL DEFAULT 0.0,
    `department` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT ' ',
    `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `update_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `products` SET `name` = 'IPhone X', `price` = 900.13, `department` = 'Electronics';
INSERT INTO `products` SET `name` = 'IPhone XI', `price` = 1000.13, `department` = 'Electronics';
INSERT INTO `products` SET `name` = 'IPhone XII', `price` = 1100.13, `department` = 'Electronics';
INSERT INTO `products` SET `name` = 'IPhone XIII', `price` = 1200.13, `department` = 'Electronics';
INSERT INTO `products` SET `name` = 'Gibson Les Paul', `price` = 900.67, `department` = 'Music';
INSERT INTO `products` SET `name` = 'Gibson Les', `price` = 800.67, `department` = 'Music';
INSERT INTO `products` SET `name` = 'Ice Cream - Fudge Bars', `price` = 6.87, `department` = 'Food';
INSERT INTO `products` SET `name` = 'Ice Cream - Fudge', `price` = 5.87, `department` = 'Food';
INSERT INTO `products` SET `name` = 'Mushroom - Shitake, Fresh', `price` = 7.94, `department` = 'Food';
INSERT INTO `products` SET `name` = 'Ephiphone Les Paul Studio', `price` = 520.51, `department` = 'Music';
INSERT INTO `products` SET `name` = 'MacBook Pro 2015', `price` = 722.43, `department` = 'Electronics';
INSERT INTO `products` SET `name` = 'MacBook Pro 2016', `price` = 822.43, `department` = 'Electronics';
INSERT INTO `products` SET `name` = 'MacBook Pro 2017', `price` = 922.43, `department` = 'Electronics';
INSERT INTO `products` SET `name` = 'MacBook Pro 2018', `price` = 1022.43, `department` = 'Electronics';

