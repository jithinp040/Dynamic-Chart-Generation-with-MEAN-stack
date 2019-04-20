-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.24 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for minipro
CREATE DATABASE IF NOT EXISTS `minipro` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `minipro`;

-- Dumping structure for table minipro.repofjithin
CREATE TABLE IF NOT EXISTS `repofjithin` (
  `year` varchar(12) NOT NULL,
  `Jan` int(11) DEFAULT NULL,
  `Feb` int(11) DEFAULT NULL,
  `Mar` int(11) DEFAULT NULL,
  `Apr` int(11) DEFAULT NULL,
  `Jun` int(11) DEFAULT NULL,
  `Jul` int(11) DEFAULT NULL,
  `Aug` int(11) DEFAULT NULL,
  `Sept` int(11) DEFAULT NULL,
  `Oct` int(11) DEFAULT NULL,
  `Nov` int(11) DEFAULT NULL,
  `Dec` int(11) DEFAULT NULL,
  `stat` text,
  PRIMARY KEY (`year`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Dumping data for table minipro.repofjithin: 1 rows
DELETE FROM `repofjithin`;
/*!40000 ALTER TABLE `repofjithin` DISABLE KEYS */;
INSERT INTO `repofjithin` (`year`, `Jan`, `Feb`, `Mar`, `Apr`, `Jun`, `Jul`, `Aug`, `Sept`, `Oct`, `Nov`, `Dec`, `stat`) VALUES
	('2019-2020', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `repofjithin` ENABLE KEYS */;

-- Dumping structure for table minipro.repofworld
CREATE TABLE IF NOT EXISTS `repofworld` (
  `year` varchar(12) NOT NULL,
  `Jan` int(11) DEFAULT NULL,
  `Feb` int(11) DEFAULT NULL,
  `Mar` int(11) DEFAULT NULL,
  `Apr` int(11) DEFAULT NULL,
  `Jun` int(11) DEFAULT NULL,
  `Jul` int(11) DEFAULT NULL,
  `Aug` int(11) DEFAULT NULL,
  `Sept` int(11) DEFAULT NULL,
  `Oct` int(11) DEFAULT NULL,
  `Nov` int(11) DEFAULT NULL,
  `Dec` int(11) DEFAULT NULL,
  `stat` text,
  PRIMARY KEY (`year`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Dumping data for table minipro.repofworld: 1 rows
DELETE FROM `repofworld`;
/*!40000 ALTER TABLE `repofworld` DISABLE KEYS */;
INSERT INTO `repofworld` (`year`, `Jan`, `Feb`, `Mar`, `Apr`, `Jun`, `Jul`, `Aug`, `Sept`, `Oct`, `Nov`, `Dec`, `stat`) VALUES
	('2019-2020', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `repofworld` ENABLE KEYS */;

-- Dumping structure for table minipro.repofzoro
CREATE TABLE IF NOT EXISTS `repofzoro` (
  `year` varchar(12) NOT NULL,
  `Jan` int(11) DEFAULT NULL,
  `Feb` int(11) DEFAULT NULL,
  `Mar` int(11) DEFAULT NULL,
  `Apr` int(11) DEFAULT NULL,
  `Jun` int(11) DEFAULT NULL,
  `Jul` int(11) DEFAULT NULL,
  `Aug` int(11) DEFAULT NULL,
  `Sept` int(11) DEFAULT NULL,
  `Oct` int(11) DEFAULT NULL,
  `Nov` int(11) DEFAULT NULL,
  `Dec` int(11) DEFAULT NULL,
  `stat` text,
  PRIMARY KEY (`year`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Dumping data for table minipro.repofzoro: 1 rows
DELETE FROM `repofzoro`;
/*!40000 ALTER TABLE `repofzoro` DISABLE KEYS */;
INSERT INTO `repofzoro` (`year`, `Jan`, `Feb`, `Mar`, `Apr`, `Jun`, `Jul`, `Aug`, `Sept`, `Oct`, `Nov`, `Dec`, `stat`) VALUES
	('2019-2020', 55, 66, 45, 89, 67, 74, 55, 85, 46, 65, 91, 'Hello this is the statistics report of 2018-2019.');
/*!40000 ALTER TABLE `repofzoro` ENABLE KEYS */;

-- Dumping structure for table minipro.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT '0',
  `pass` varchar(50) DEFAULT '0',
  `email` varchar(50) DEFAULT NULL,
  `rname` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table minipro.users: 3 rows
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `pass`, `email`, `rname`) VALUES
	(1, 'zoro', 'Uchih@Zor0', 'jithinb71@gmail.com', 'Jithin P B'),
	(2, 'jithin', 'Tens@7angetsu', 'jithinb71@gmail.com', 'jithin'),
	(6, 'world', 'Uchih@Zor0', 'jithinb71@gmail.com', 'hello');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
