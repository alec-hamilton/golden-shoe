# ************************************************************
# Sequel Ace SQL dump
# Version 20031
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: 127.0.0.1 (MySQL 5.7.37)
# Database: golden-shoe
# Generation Time: 2022-06-15 13:21:07 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table brands
# ------------------------------------------------------------

DROP TABLE IF EXISTS `brands`;

CREATE TABLE `brands` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;

INSERT INTO `brands` (`id`, `brand`)
VALUES
	(1,'Vans'),
	(2,'Reebok'),
	(3,'Nike'),
	(4,'Crocs'),
	(5,'Puma'),
	(6,'New Balance'),
	(7,'Converse'),
	(8,'Clarks');

/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table products
# ------------------------------------------------------------

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `brand` int(11) unsigned DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_brand` (`brand`),
  CONSTRAINT `fk_products_brand` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;

INSERT INTO `products` (`id`, `brand`, `model`, `price`, `image_name`, `stock`)
VALUES
	(1,1,'Anaheim Factory Classic Slip-on',45,'shoe1.jpg',12),
	(2,8,'Wallabee',90,'shoe2.jpg',2),
	(3,6,'1500',130,'shoe3.jpg',0),
	(4,2,'Zig Kinetica II',70,'shoe4.jpg',4),
	(5,3,'GTS 97',45,'shoe5.jpg',0),
	(6,6,'327',70,'shoe6.jpg',8),
	(7,5,'Palermo',60,'shoe7.jpg',7),
	(8,3,'Air VaporMax 2021',150,'shoe8.jpg',7),
	(9,4,'Classic Clog',30,'shoe9.jpg',0),
	(10,7,'Chuck 70 Hi',50,'shoe10.jpg',2),
	(11,2,'Classic Leather',50,'shoe11.jpg',3),
	(12,1,'Anaheim Factory Authentic Plaid',50,'shoe12.jpg',6);

/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
