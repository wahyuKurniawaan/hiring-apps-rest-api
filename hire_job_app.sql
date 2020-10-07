-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: hire_job_app
-- ------------------------------------------------------
-- Server version	8.0.21-0ubuntu0.20.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account_job_seeker`
--

DROP TABLE IF EXISTS `account_job_seeker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_job_seeker` (
  `id_account_job_seeker` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `full_name` varchar(200) NOT NULL,
  `no_handphone` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `status` enum('logged out','logged in') NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_account_job_seeker`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_job_seeker`
--

LOCK TABLES `account_job_seeker` WRITE;
/*!40000 ALTER TABLE `account_job_seeker` DISABLE KEYS */;
INSERT INTO `account_job_seeker` VALUES (1,'wahyukurniawaan@gmail.com','Wahyu Kurniawan','089630033462','123456','logged out','2020-09-18 00:00:00','2020-09-18 13:31:21'),(2,'test','test name2222','1114042','password','logged out','2020-09-18 00:00:00','2020-09-18 13:31:21'),(3,'budar@gmail.com','Budi Darmawan','129421867','ini password','logged out','2020-09-19 13:58:19','2020-09-19 13:58:19'),(4,'diooonn@hotmail.com','Mardion Massaid','89126468241','qwerty','logged out','2020-09-19 13:59:18','2020-09-19 13:59:18'),(5,'aliyuddin@menkeu.go.id','Ilham Aliyudin','1245861298','123456','logged in','2020-09-19 14:00:38','2020-09-19 14:00:38'),(6,'iksannn@yahoo.com','Khairul Ikhsan','987326571','isekai i come','logged out','2020-09-19 14:02:03','2020-09-19 14:02:03'),(7,'mrizki12@gmail.com','Muhammad Rizki','126482325','password is too strong','logged out','2020-09-19 14:03:16','2020-09-19 14:03:16'),(8,'masrei@gmail.com','Reihan Bayzaki','981573928','password must contain number','logged in','2020-09-19 14:04:02','2020-09-19 14:04:02'),(9,'kakros@gmail.com','Rosyida Widadina','14268421','password must contain alphabet','logged in','2020-09-19 14:05:10','2020-09-19 14:05:10'),(10,'testpatch@email.com','test patch name','123124124','password patch','logged out','2020-09-19 14:23:34','2020-09-19 14:23:34'),(11,'test@email.com','test nama','123456789','test password','logged in','2020-09-19 16:18:06','2020-09-19 16:18:06');
/*!40000 ALTER TABLE `account_job_seeker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_recruiter`
--

DROP TABLE IF EXISTS `account_recruiter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_recruiter` (
  `id_account_recruiter` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `full_name` varchar(200) NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `role_title` varchar(50) NOT NULL,
  `no_handphone` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `status` enum('logged out','logged in','','') NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_account_recruiter`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_recruiter`
--

LOCK TABLES `account_recruiter` WRITE;
/*!40000 ALTER TABLE `account_recruiter` DISABLE KEYS */;
INSERT INTO `account_recruiter` VALUES (1,'wahyukurniawaan@gmail.com','Wahyu Kurniawan','Arkademy Group','Android Developer','089630033462','SUPER USER','logged out','2020-09-18 13:47:09','2020-09-18 13:47:09'),(2,'email patch','test patch','test patch','test patch','62896','test patch','logged out','2020-09-18 13:47:09','2020-09-18 13:47:09'),(3,'budidarmawan@gmail.com','Budi Darmawan','Arkademy Group','Android Developer','082292504890','bukan budi doremi','','2020-09-18 21:10:38','2020-09-18 21:10:38'),(4,'ardionmassaid@yahoo.com','Ardion Massaid','Arkademy Group','Android Developer','085745686773','sidion','','2020-09-18 21:14:10','2020-09-18 21:14:10'),(5,'ilhamaliyudin@hotmail.com','Ilham Aliyudin','Arkademy Group','Android Developer','085624341817','ini password','','2020-09-18 21:23:16','2020-09-18 21:23:16'),(6,'khairulikhsan@gmail.co.id','Khairul Ikhsan','Arkademy Group','Android Developer','0895606084723','alpha capri','logged out','2020-09-18 21:29:06','2020-09-18 21:29:06'),(7,'muhammadrizki@google.com','Muhammad Rizki','Google Fondation','Trainer','085710412285','orang jakarta','logged in','2020-09-18 21:47:54','2020-09-18 21:47:54'),(8,'reihanbayzaky@indeed.com','Reihan Bayzaki','Indeed HR TI','Manager','081229377348','kuy mabar','logged in','2020-09-18 21:52:41','2020-09-18 21:52:41'),(9,'rosyidawidadina@gmail.com','Rosyida Widadina','Arkademy Group','Android Developer','085708564948','putri salju','logged out','2020-09-18 21:59:05','2020-09-18 21:59:05'),(10,'test error email','test error nama','test error company name','test error role title','007','test password','logged in','2020-09-18 22:09:16','2020-09-18 22:09:16');
/*!40000 ALTER TABLE `account_recruiter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portofolio_job_seeker`
--

DROP TABLE IF EXISTS `portofolio_job_seeker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portofolio_job_seeker` (
  `id_portofolio` int NOT NULL AUTO_INCREMENT,
  `application_name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `publication_link` varchar(100) NOT NULL,
  `repository_link` varchar(100) NOT NULL,
  `workplace` varchar(100) NOT NULL,
  `type` enum('mobile application','web application','desktop application','') NOT NULL,
  `portofolio_image` varchar(100) NOT NULL,
  PRIMARY KEY (`id_portofolio`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portofolio_job_seeker`
--

LOCK TABLES `portofolio_job_seeker` WRITE;
/*!40000 ALTER TABLE `portofolio_job_seeker` DISABLE KEYS */;
INSERT INTO `portofolio_job_seeker` VALUES (1,'Project Camera','membuat aplikasi android camera','https://github.com/wahyuKurniawaan','https://github.com/wahyuKurniawaan','project pribadi','mobile application','https://icons.iconarchive.com/icons/treetog/junior/256/folder-blue-pictures-icon.png'),(2,'Project Realtime CCTV 24 Hour','membuat aplikasi android yang memantau cctv secara langsung melalui HP','https://github.com/wahyuKurniawaan','https://github.com/wahyuKurniawaan','project pribadi','mobile application','https://icons.iconarchive.com/icons/aha-soft/free-global-security/128/CCTV-Camera-icon.png'),(3,'Application galery theme','membuat aplikasi android galeri foto dengan banyak tema','https://github.com/wahyuKurniawaan','https://github.com/wahyuKurniawaan','project pribadi','mobile application','https://icons.iconarchive.com/icons/gakuseisean/aire/128/Images-icon.png');
/*!40000 ALTER TABLE `portofolio_job_seeker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_job_seeker`
--

DROP TABLE IF EXISTS `profile_job_seeker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_job_seeker` (
  `id_profile_job_seeker` int NOT NULL AUTO_INCREMENT,
  `id_account_job_seeker` int NOT NULL,
  `id_portofolio_job_seeker` int NOT NULL,
  `id_skill` int NOT NULL,
  `email` varchar(100) NOT NULL,
  `full_name` varchar(200) NOT NULL,
  `job_title` varchar(100) NOT NULL,
  `status_job` enum('freelancer','full time','internship','idle') NOT NULL,
  `address` text NOT NULL,
  `city` varchar(100) NOT NULL,
  `workplace` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_profile_job_seeker`),
  KEY `fk_account_have_profile` (`id_account_job_seeker`),
  CONSTRAINT `fk_account_have_profile` FOREIGN KEY (`id_account_job_seeker`) REFERENCES `account_job_seeker` (`id_account_job_seeker`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_job_seeker`
--

LOCK TABLES `profile_job_seeker` WRITE;
/*!40000 ALTER TABLE `profile_job_seeker` DISABLE KEYS */;
INSERT INTO `profile_job_seeker` VALUES (1,1,1,1,'wahyukurniawaan@gmail.com','Wahyu Kurniawan','Android Developer','full time','tanjung barat, jagakarsa','DKI Jakarta','Arkademy','image-1601793412341.jpg','sedang mengikuti bootcamp arkademy','2020-09-19 20:00:10','2020-10-04 06:36:54'),(4,2,2,2,'budidarmawan@gmail.com','Budi Darmawan','Web Developer','freelancer','Balik papan','Kalimantan Timur','Arkademy','image-1601793845103.jpg','sedang mengikuti bootcamp arkademy','2020-09-20 19:23:55','2020-10-04 06:44:06'),(5,2,2,2,'ardionmassaid@gmail.com','Ardion Massaid','Web Developer','full time','Airlangga','Surabaya','Arkademy','image-1601794138107.jpg','sedang mengikuti bootcamp arkademy','2020-09-20 19:25:28','2020-10-04 06:49:00'),(6,5,5,4,'ilhamaliyuddin@gmail.com','Ilham Aliyuddin','Android Developer','freelancer','Bandung','Jawa Barat','Arkademy','image-1601794538980.jpg','sedang mengikuti bootcamp arkademy','2020-09-20 19:26:51','2020-10-04 06:55:40'),(7,6,6,5,'khairulichsan@gmail.com','Khairul Ichsan','Web Developer','full time','Pontianak','Kalimantan Barat','Arkademy','image-1601794747852.jpg','sedang mengikuti bootcamp arkademy','2020-09-20 19:28:15','2020-10-04 06:59:09'),(8,7,7,6,'muhammadrizki@gmail.com','Muhammad Rizki','Android Developer','freelancer','Jakarta Selatan','DKI Jakarta','Arkademy','image-1601794854952.jpg','sedang mengikuti bootcamp arkademy','2020-09-20 19:28:45','2020-10-04 07:00:56'),(9,8,8,7,'reihanbayzaki@gmail.com','Reihan Bayzaki Bagus Mahdy','Web Developer','full time','Banyumas','Jawa Tengah','Arkademy','image-1601795018080.jpg','sedang mengikuti bootcamp arkademy','2020-09-20 19:29:44','2020-10-04 07:03:39'),(10,9,9,8,'rosyidawidadina@gmail.com','Rosyida Widadina Ulya','Android Developer','freelancer','Surabaya','Jawa Timur','Arkademy','image-1601795104651.jpg','sedang mengikuti bootcamp arkademy','2020-09-20 19:30:07','2020-10-04 07:05:06');
/*!40000 ALTER TABLE `profile_job_seeker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_recruiter`
--

DROP TABLE IF EXISTS `profile_recruiter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_recruiter` (
  `id_profile_recruiter` int NOT NULL AUTO_INCREMENT,
  `id_account_recruiter` int NOT NULL,
  `email` varchar(100) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `job_title` varchar(100) NOT NULL,
  `linkedin` varchar(100) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `company_field` varchar(100) NOT NULL,
  `company_address` text NOT NULL,
  `city` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `company_website` varchar(100) NOT NULL,
  `company_phone_number` varchar(20) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_profile_recruiter`),
  KEY `fk_account_recruiter_have_profile` (`id_account_recruiter`),
  CONSTRAINT `fk_account_recruiter_have_profile` FOREIGN KEY (`id_account_recruiter`) REFERENCES `account_recruiter` (`id_account_recruiter`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_recruiter`
--

LOCK TABLES `profile_recruiter` WRITE;
/*!40000 ALTER TABLE `profile_recruiter` DISABLE KEYS */;
INSERT INTO `profile_recruiter` VALUES (1,1,'wahyukurniawaan@gmail.com','Wahyu Kurniawan','Android Developer','not have yet','Arkademy','Talent IT Recruiter','online','Indonesia','mencari talent mobile application yang siap bekerja','https://www.arkademy.com/','+628111848182','2020-09-19 22:28:56','2020-09-19 22:28:56'),(2,3,'test patch email','test patch full name','test patch job title','test patch linkedin','test patch company','test patch com field','patch company address','patch city','patch description','patch website','5544332211','2020-09-19 22:29:22','2020-09-19 22:29:22');
/*!40000 ALTER TABLE `profile_recruiter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_job_seeker`
--

DROP TABLE IF EXISTS `project_job_seeker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_job_seeker` (
  `id_project` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` int NOT NULL,
  `duration` varchar(30) NOT NULL,
  PRIMARY KEY (`id_project`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_job_seeker`
--

LOCK TABLES `project_job_seeker` WRITE;
/*!40000 ALTER TABLE `project_job_seeker` DISABLE KEYS */;
INSERT INTO `project_job_seeker` VALUES (1,'Project beauty camera','membuat aplikasi android kamera dengan tambahan fitur efek cantik',30000000,'5 Month'),(2,'Project Live Control CCTV 24 Hour','membuat aplikasi android yang akan mengontrol cctv yang dipasang di rumah melalui android',50000000,'8 Month'),(6,'Project Dating Apps = Tenten','membuat aplikasi android pencari jodoh dengan mempertemukan pasangan bedasarkan lokasi ataupun minat',10000000,'3 Month'),(7,'Urgent Project pemantauan covid','membuat aplikasi android yang berfokus terhadap kondisi pandemik covid-19',150000000,'2 Month'),(9,'Project Aplikasi android Hiring Jobs','membuat aplikasi android yang membantu para pencari kerja ataupun perusahaan yang sedang mencari karyawan',50000000,'3 Month'),(11,'Aplikasi android Hiring Jobs software engineer','membuat aplikasi android yang membantu para pencari kerja dengan sistem per project khusus untuk software engineer',45000000,'3 Month'),(12,'Project Game Android Peou','membuat project game android bernama Peou yang bertemakan seperti tamagochi',17000000,'10 Month'),(14,'Project Game Android Battle Royale = Penguin arena','membuat project game android bernama Penguin arena bertemakan battle royal hingga 50 pemain',30000000,'12 Month'),(16,'test patch request','test patch description',1000,' satu tahun'),(17,'test2','test2',2000000,'2 Month'),(18,'test3','test3',2000000,'2 Month'),(19,'test4','test4',4000000,'4 Month');
/*!40000 ALTER TABLE `project_job_seeker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_recruiter`
--

DROP TABLE IF EXISTS `project_recruiter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_recruiter` (
  `id_project_recruiter` int NOT NULL AUTO_INCREMENT,
  `project_name` varchar(100) NOT NULL,
  `project_description` text NOT NULL,
  `project_start_date` date NOT NULL,
  `project_end_date` date NOT NULL,
  `project_image` text NOT NULL,
  `repository_link` varchar(100) NOT NULL,
  `id_skill` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_project_recruiter`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_recruiter`
--

LOCK TABLES `project_recruiter` WRITE;
/*!40000 ALTER TABLE `project_recruiter` DISABLE KEYS */;
INSERT INTO `project_recruiter` VALUES (1,'project backup data mobile application','membuat aplikasi android yang akan membackup data secara cloud','2020-09-20','2020-09-29','https://icons.iconarchive.com/icons/whyred/dsquared-bin/128/trash-yellow-full-icon.png','https://github.com/wahyuKurniawaan',1,'2020-09-20 00:49:54','2020-09-20 00:49:54'),(2,'test patch','test patch','0000-00-00','0000-00-00','test patch','test patch',2,'2020-09-20 00:50:58','2020-09-20 00:50:58'),(32,'project game android peperangan','membuat aplikasi game android dengan tema first person shooting war','2020-09-20','2020-09-29','image-1601034555025.png','https://github.com/wahyuKurniawaan',1,'2020-09-25 18:49:15','2020-09-25 18:49:15'),(33,'project game android peperangan','membuat aplikasi game android dengan tema first person shooting war','2020-09-20','2020-09-29','image-1601038762068.png','https://github.com/wahyuKurniawaan',1,'2020-09-25 19:59:22','2020-09-25 19:59:22');
/*!40000 ALTER TABLE `project_recruiter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill`
--

DROP TABLE IF EXISTS `skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill` (
  `id_skill` int NOT NULL AUTO_INCREMENT,
  `name_skill` varchar(100) NOT NULL,
  PRIMARY KEY (`id_skill`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill`
--

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
INSERT INTO `skill` VALUES (1,'Kotlin'),(2,'Phiton'),(3,'Laravel'),(4,'Golang'),(5,'JavaScript'),(6,'PHP'),(7,'HTML'),(8,'C++'),(9,'Swift'),(11,'patch');
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` text NOT NULL,
  `user_role` enum('job seeker','recruiter','admin') NOT NULL,
  `user_status` enum('not active','activated') NOT NULL DEFAULT 'not active',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Wahyu Kurniawan','wahyukurniawaan@gmail.com','$2a$10$3NqABM9lyV5dJOCRYucglOmkHYyEIAfimvfsa3.c7d7D9//8KQyiG','admin','activated','2020-09-23 08:31:07','2020-09-26 17:47:59'),(2,'Job Seeker Dummy','jobseeker@dummy.com','$2a$10$f0N8G.QxYoZxhEdxKYKIruwvukuUPneU5Y7PzUJwp0JByRgdYYnqW','job seeker','activated','2020-09-23 08:31:25','2020-09-27 08:54:10'),(3,'Recruiter Dummy','recruiter@dummy.com','$2a$10$mXgmSCf145JR8YPnoHEQ7.cJL7Vgs9mgCwGkzknVrjhudY7N6sZqS','recruiter','activated','2020-09-23 08:43:44','2020-09-27 08:53:32'),(4,'budi darmawan','budidarmawan@gmail.com','$2a$10$mcXWAbI.88EGT.N0WG2/pewXVUf6uN62H/.wVzHuVdq54571XNgpK','job seeker','not active','2020-09-28 03:30:33','2020-09-28 03:30:33'),(5,'Ardion Massaid','ardionmassaid@gmail.com','$2a$10$7wqf1TMzmLH6tQiYfI.iEOmk7zc0ThPtgfRApeu/nJ3RIHtuilRzi','recruiter','not active','2020-10-02 15:16:56','2020-10-02 15:16:55'),(6,'Rosyida Widadina','rosyida@gmail.com','$2a$10$vnI6F5PbS61vZLF4Vg1fZOAc.l.4KxU6fJctFpq21cnznNvSFYsLW','job seeker','not active','2020-10-02 15:18:22','2020-10-02 15:18:21'),(7,'test','test@email.com','$2a$10$Q7wnJTCIe8qjLfc7YjdNl.b2ySO.fM9c8yoZLh6KFdJkAxTcn9GTe','recruiter','not active','2020-10-02 15:52:41','2020-10-02 15:52:41'),(8,'test','test1@email.com','$2a$10$jrg0NRCIlvSEQsWJavlOwefPW/b5CQg9gvQ2iNimrMftQeiFg4HwG','recruiter','not active','2020-10-02 15:53:38','2020-10-02 15:53:38'),(9,'test','test2@email.com','$2a$10$Pg96Uxk9lW16UWZ4RB1lTuSYFa3cpLwHx7NglkqlnMW4iugtVbOKy','recruiter','not active','2020-10-02 15:54:19','2020-10-02 15:54:18'),(10,'test','test3@email.com','$2a$10$z0Ckfpgs6FSLfdM97XJNbuh3.n3HURSk1sPMbrcSgkGBvfW.cDjta','recruiter','not active','2020-10-02 15:54:54','2020-10-02 15:54:54'),(11,'yayaya','yaya','$2a$10$XUatJZkduLLnSLjwiARUeu1TJdnZC5rT33wGGV/6o17efAF6ScEAO','recruiter','not active','2020-10-02 15:59:42','2020-10-02 15:59:41'),(12,'yeyeye','yeyeye','$2a$10$Bzk5JSUQ5PWsovqYJfjbUewHPaeCShTMsSQcclVczqofEzZwHxOOC','recruiter','not active','2020-10-02 16:01:57','2020-10-02 16:01:56'),(13,'alex','alex','$2a$10$q78B/HzrMRSmM7SfM7028OdSeRZkCd0.dA3HIBtRNrTAFp4HoW1oe','recruiter','not active','2020-10-05 00:46:06','2020-10-05 00:46:06'),(14,'Muhammad  Rizki','muhammadrizki@gmail.com','$2a$10$eNons2rHbmBiX/Q2oqAi0uP98DQzdPWqAIAlh3KRWQqEHU4NLlOJC','job seeker','not active','2020-10-05 04:10:39','2020-10-05 04:10:39');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_exp_job_seeker`
--

DROP TABLE IF EXISTS `work_exp_job_seeker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_exp_job_seeker` (
  `id_work_exp` int NOT NULL AUTO_INCREMENT,
  `id_profile_job_seeker` int NOT NULL,
  `position` varchar(100) NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id_work_exp`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_exp_job_seeker`
--

LOCK TABLES `work_exp_job_seeker` WRITE;
/*!40000 ALTER TABLE `work_exp_job_seeker` DISABLE KEYS */;
INSERT INTO `work_exp_job_seeker` VALUES (1,4,'test patch','test patch','0000-00-00','0000-00-00','test patch'),(2,2,'Senior Android Developer','Arkademy Tech','2019-08-01','2019-11-01','membuat project Hiring application bedasarkan project yang ditawarkan oleh perusahaan'),(4,1,'Junior Android Developer','Arkademy','2020-08-01','2020-11-01','membuat project Hiring application bedasarkan project yang ditawarkan oleh perusahaan');
/*!40000 ALTER TABLE `work_exp_job_seeker` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-07  6:16:25
