-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2020 at 10:59 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hire_job_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `account_job_seeker`
--

CREATE TABLE `account_job_seeker` (
  `id_account_job_seeker` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `full_name` varchar(200) NOT NULL,
  `no_handphone` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `status` enum('logged out','logged in') NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account_job_seeker`
--

INSERT INTO `account_job_seeker` (`id_account_job_seeker`, `email`, `full_name`, `no_handphone`, `password`, `status`, `created_at`, `updated_at`) VALUES
(1, 'wahyukurniawaan@gmail.com', 'Wahyu Kurniawan', '089630033462', '123456', 'logged out', '2020-09-18 00:00:00', '2020-09-18 13:31:21'),
(2, 'test', 'test name2222', '1114042', 'password', 'logged out', '2020-09-18 00:00:00', '2020-09-18 13:31:21'),
(3, 'budar@gmail.com', 'Budi Darmawan', '129421867', 'ini password', 'logged out', '2020-09-19 13:58:19', '2020-09-19 13:58:19'),
(4, 'diooonn@hotmail.com', 'Mardion Massaid', '89126468241', 'qwerty', 'logged out', '2020-09-19 13:59:18', '2020-09-19 13:59:18'),
(5, 'aliyuddin@menkeu.go.id', 'Ilham Aliyudin', '1245861298', '123456', 'logged in', '2020-09-19 14:00:38', '2020-09-19 14:00:38'),
(6, 'iksannn@yahoo.com', 'Khairul Ikhsan', '987326571', 'isekai i come', 'logged out', '2020-09-19 14:02:03', '2020-09-19 14:02:03'),
(7, 'mrizki12@gmail.com', 'Muhammad Rizki', '126482325', 'password is too strong', 'logged out', '2020-09-19 14:03:16', '2020-09-19 14:03:16'),
(8, 'masrei@gmail.com', 'Reihan Bayzaki', '981573928', 'password must contain number', 'logged in', '2020-09-19 14:04:02', '2020-09-19 14:04:02'),
(9, 'kakros@gmail.com', 'Rosyida Widadina', '14268421', 'password must contain alphabet', 'logged in', '2020-09-19 14:05:10', '2020-09-19 14:05:10'),
(10, 'testpatch@email.com', 'test patch name', '123124124', 'password patch', 'logged out', '2020-09-19 14:23:34', '2020-09-19 14:23:34'),
(11, 'test@email.com', 'test nama', '123456789', 'test password', 'logged in', '2020-09-19 16:18:06', '2020-09-19 16:18:06');

-- --------------------------------------------------------

--
-- Table structure for table `account_recruiter`
--

CREATE TABLE `account_recruiter` (
  `id_account_recruiter` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `full_name` varchar(200) NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `role_title` varchar(50) NOT NULL,
  `no_handphone` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `status` enum('logged out','logged in','','') NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account_recruiter`
--

INSERT INTO `account_recruiter` (`id_account_recruiter`, `email`, `full_name`, `company_name`, `role_title`, `no_handphone`, `password`, `status`, `created_at`, `updated_at`) VALUES
(1, 'wahyukurniawaan@gmail.com', 'Wahyu Kurniawan', 'Arkademy Group', 'Android Developer', '089630033462', 'SUPER USER', 'logged out', '2020-09-18 13:47:09', '2020-09-18 13:47:09'),
(2, 'email patch', 'test patch', 'test patch', 'test patch', '62896', 'test patch', 'logged out', '2020-09-18 13:47:09', '2020-09-18 13:47:09'),
(3, 'budidarmawan@gmail.com', 'Budi Darmawan', 'Arkademy Group', 'Android Developer', '082292504890', 'bukan budi doremi', '', '2020-09-18 21:10:38', '2020-09-18 21:10:38'),
(4, 'ardionmassaid@yahoo.com', 'Ardion Massaid', 'Arkademy Group', 'Android Developer', '085745686773', 'sidion', '', '2020-09-18 21:14:10', '2020-09-18 21:14:10'),
(5, 'ilhamaliyudin@hotmail.com', 'Ilham Aliyudin', 'Arkademy Group', 'Android Developer', '085624341817', 'ini password', '', '2020-09-18 21:23:16', '2020-09-18 21:23:16'),
(6, 'khairulikhsan@gmail.co.id', 'Khairul Ikhsan', 'Arkademy Group', 'Android Developer', '0895606084723', 'alpha capri', 'logged out', '2020-09-18 21:29:06', '2020-09-18 21:29:06'),
(7, 'muhammadrizki@google.com', 'Muhammad Rizki', 'Google Fondation', 'Trainer', '085710412285', 'orang jakarta', 'logged in', '2020-09-18 21:47:54', '2020-09-18 21:47:54'),
(8, 'reihanbayzaky@indeed.com', 'Reihan Bayzaki', 'Indeed HR TI', 'Manager', '081229377348', 'kuy mabar', 'logged in', '2020-09-18 21:52:41', '2020-09-18 21:52:41'),
(9, 'rosyidawidadina@gmail.com', 'Rosyida Widadina', 'Arkademy Group', 'Android Developer', '085708564948', 'putri salju', 'logged out', '2020-09-18 21:59:05', '2020-09-18 21:59:05'),
(10, 'test error email', 'test error nama', 'test error company name', 'test error role title', '007', 'test password', 'logged in', '2020-09-18 22:09:16', '2020-09-18 22:09:16');

-- --------------------------------------------------------

--
-- Table structure for table `offer`
--

CREATE TABLE `offer` (
  `id_offer` int(11) NOT NULL,
  `id_profile_job_seeker` int(11) NOT NULL,
  `id_project` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `portofolio_job_seeker`
--

CREATE TABLE `portofolio_job_seeker` (
  `id_portofolio` int(11) NOT NULL,
  `application_name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `publication_link` varchar(100) NOT NULL,
  `repository_link` varchar(100) NOT NULL,
  `workplace` varchar(100) NOT NULL,
  `type` enum('mobile application','web application','desktop application','') NOT NULL,
  `portofolio_image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `portofolio_job_seeker`
--

INSERT INTO `portofolio_job_seeker` (`id_portofolio`, `application_name`, `description`, `publication_link`, `repository_link`, `workplace`, `type`, `portofolio_image`) VALUES
(1, 'Project Camera', 'membuat aplikasi android camera', 'https://github.com/wahyuKurniawaan', 'https://github.com/wahyuKurniawaan', 'project pribadi', 'mobile application', 'https://icons.iconarchive.com/icons/treetog/junior/256/folder-blue-pictures-icon.png'),
(2, 'Project Realtime CCTV 24 Hour', 'membuat aplikasi android yang memantau cctv secara langsung melalui HP', 'https://github.com/wahyuKurniawaan', 'https://github.com/wahyuKurniawaan', 'project pribadi', 'mobile application', 'https://icons.iconarchive.com/icons/aha-soft/free-global-security/128/CCTV-Camera-icon.png'),
(3, 'Application galery theme', 'membuat aplikasi android galeri foto dengan banyak tema', 'https://github.com/wahyuKurniawaan', 'https://github.com/wahyuKurniawaan', 'project pribadi', 'mobile application', 'https://icons.iconarchive.com/icons/gakuseisean/aire/128/Images-icon.png');

-- --------------------------------------------------------

--
-- Table structure for table `profile_job_seeker`
--

CREATE TABLE `profile_job_seeker` (
  `id_profile_job_seeker` int(11) NOT NULL,
  `id_account_job_seeker` int(11) NOT NULL,
  `id_portofolio_job_seeker` int(11) NOT NULL,
  `skill` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `full_name` varchar(200) NOT NULL,
  `job_title` varchar(100) NOT NULL,
  `status_job` enum('freelancer','full time','internship','idle') NOT NULL,
  `address` text NOT NULL,
  `city` varchar(100) NOT NULL,
  `workplace` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profile_job_seeker`
--

INSERT INTO `profile_job_seeker` (`id_profile_job_seeker`, `id_account_job_seeker`, `id_portofolio_job_seeker`, `skill`, `email`, `full_name`, `job_title`, `status_job`, `address`, `city`, `workplace`, `image`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'kotlin,SQL,NodeJS', 'wahyukurniawaan@gmail.com', 'Wahyu Kurniawan', 'Android Developer', 'full time', 'tanjung barat, jagakarsa', 'DKI Jakarta', 'Arkademy', 'image-1601793412341.jpg', 'Saya orang yang fleksibel, bisa beradaptasi terhadap lingkungan kerja yang berbeda. Dan juga terbiasa bekerja di dalam tekanan dengan berbeda pekerjaan bedasarkan dengan pengalaman kerja saya jalani selama ini.\r\n\r\nSaya tertarik untuk belajar bahasa pemrograman dan mencoba belajar Java dengan menyelesaikan course yang tersedia di berbagai website di internet. Setelah itu saya memutuskan untuk belajar lebih dalam dengan mengikuti bootcamp yang disediakan oleh Arkademy. Saya banyak belajar tentang apa yang harus dibutuhkan sebagai seorang android developer dan mendapatkan pengalaman untuk membuat dan mengembangkan aplikasi android dengan kotlin dan dengan node.js sebagai back-end nya.', '2020-09-19 20:00:10', '2020-10-04 06:36:54'),
(4, 2, 2, 'JavaScript,SQL,NodeJs', 'budidarmawan@gmail.com', 'Budi Darmawan', 'Web Developer', 'freelancer', 'Balik papan', 'Kalimantan Timur', 'Arkademy', 'image-1601793845103.jpg', 'Saya merupakan lulusan S1 Matematika yang sangat tertarik dengan teknologi, sehingga semasa kuliah saya belajar beberapa bahasa pemrograman. Setelah selesai kuliah saya mulai fokus belajar mengenai pengembangan aplikasi android, sehingga saya mengikuti program bootcamp Arkademy Tech Academy untuk menjadi Android Developer profesional.\r\n\r\nSaya juga belajar di salah satu platform teknologi yang terkenal di Indonesia yaitu Dicoding Indonesia, untuk membantu peningkatan hard skill dan semoga kedepannya bisa mendapatkan sertifikasi dari Google yaitu Associate Android Developer.\r\n\r\nTechnical Skill :\r\n• Languages: Kotlin, Node.JS, Python, Javascript\r\n• Frameworks: Express.JS\r\n• Database: SQL {MySQL}\r\n• Other: Git, Amazaon AWS, Android Studio, HTML, CSS ', '2020-09-20 19:23:55', '2020-10-04 06:44:06'),
(5, 2, 2, 'JavaScript,SQL,NodeJs', 'ardionmassaid@gmail.com', 'Ardion Massaid', 'Web Developer', 'full time', 'Airlangga', 'Surabaya', 'Arkademy', 'image-1601794138107.jpg', 'Since I was little, I have a great interest in technology, from elementary school I like to use Google just to search for games, or to create a Facebook account. after junior high school i liked to learn microsoft excel and all its programs. after high school I studied Pascal programming and participated in the computer olympiad. And when I was in college I learned other programming languages such as R, Phiton, C ++. and after I graduated I wanted to learn how to make Android applications. Finally, I found Arkademy which was a place for me to learn and become a professional Android Developer because programming is my passion. ', '2020-09-20 19:25:28', '2020-10-04 06:49:00'),
(6, 5, 5, 'kotlin,SQL,NodeJS', 'ilhamaliyuddin@gmail.com', 'Ilham Aliyuddin', 'Android Developer', 'freelancer', 'Bandung', 'Jawa Barat', 'Arkademy', 'image-1601794538980.jpg', 'sedang mengikuti bootcamp arkademy', '2020-09-20 19:26:51', '2020-10-04 06:55:40'),
(7, 6, 6, 'JavaScript,SQL,NodeJs', 'khairulichsan@gmail.com', 'Khairul Ichsan', 'Web Developer', 'full time', 'Pontianak', 'Kalimantan Barat', 'Arkademy', 'image-1601794747852.jpg', 'Saya seorang Android Developer yang mempunyai semangat yang kuat untuk mempelajari hal-hal baru, mengedepankan fakta, inventif, dan juga mempunyai motivasi yang tinggi, yaitu Gain Knowledge, Try Something New, Build a Plan, Law of Attraction.\r\n\r\nLatar belakang pendidikan saya adalah lulusan SMK jurusan RPL yang mempelajari pemrograman web menggunakan framework Laravel dan juga mempelajari aplikasi desktop menggunakan VB.Net.\r\n\r\nDengan segala bidang keahlian yang telah saya punya selama di SMK tidak menutup kemungkinan untuk saya mempelajari hal baru. Oleh karena itu saya memutuskan untuk mengikuti Bootcamp Arkademy sebagai Android Developer karena ingin mendalami lebih dalam tentang Android dan menjadi Android Developer Profesional.\r\n\r\nTechnical Skill\r\nLanguages : Kotlin, Javascript, node.js, php, VB.Net\r\nFramework : Express js, Laravel, .Net\r\nDatabase : MySQL\r\nOther : Git, Android Studio, AWS ', '2020-09-20 19:28:15', '2020-10-04 06:59:09'),
(8, 7, 7, 'kotlin,SQL,NodeJS', 'muhammadrizki@gmail.com', 'Muhammad Rizki', 'Android Developer', 'freelancer', 'Jakarta Selatan', 'DKI Jakarta', 'Arkademy', 'image-1601794854952.jpg', 'I have a \'Grit\' in technology, the first job I got at a technology service company called Visionet Data International as an IT Support. There I was required to always learn new things about technology because of the many collaborative projects between many parties. Besides that, there I was also required to be professional in providing services to corporate clients, in this case solving problems encountered by clients. The 5 years I worked and studied there made me make the decision to get out of my comfort zone and develop myself again.\r\n\r\nThen I decided to move from becoming an IT Support and planning to become an Android Developer. After I decided to stop working, I focused on learning independently and regularly about the world of technology, in this case being an Android Developer. For 1 year of studying independently and already having enough basic understanding, I finally decided to join the Arkademy Bootcamp.', '2020-09-20 19:28:45', '2020-10-04 07:00:56'),
(9, 8, 8, 'JavaScript,SQL,NodeJs', 'reihanbayzaki@gmail.com', 'Reihan Bayzaki Bagus Mahdy', 'Web Developer', 'full time', 'Banyumas', 'Jawa Tengah', 'Arkademy', 'image-1601795018080.jpg', 'Saya seorang yang terencana, mempunyai tekad/motivasi, dan ambisi. Karena hal itu saya suka menantang diri untuk mencari pengalaman baru, menemukan relasi teman baru, dan beradaptasi dengan lingkungan baru\r\n\r\nDengan latar belakang dari SMK Telkom Purwokerto , Rekayasa Perangkat Lunak. Saya memutuskan untuk mengikuti Program Bootcamp dengan pembelajaran intensif di Arkademy yang memberikan saya gambaran tentang apa yang saya dapat lakukan dalam dunia pemrograman di bidang Android Developer. Saya juga mendapat kesempatan untuk merancang dan mengembangakan Aplikasi Android dengan menggunakan Android Studio Kotlin. Secara umumnya, saya orang yang terencana dan suka dengan hal yang membuat berkembang terkait dunia pemrograman.\r\n\r\nTECHNICAL SKILLS:\r\n- Language: Kotlin\r\n- Tools : Android Studio\r\n- Database : MySql (phpMyAdmin)\r\n- Others: Git, AWS ', '2020-09-20 19:29:44', '2020-10-04 07:03:39'),
(10, 9, 9, 'kotlin,SQL,NodeJS', 'rosyidawidadina@gmail.com', 'Rosyida Widadina Ulya', 'Android Developer', 'freelancer', 'Surabaya', 'Jawa Timur', 'Arkademy', 'image-1601795104651.jpg', 'An adaptive, detailed, passionate, and always willing to learn. I have high motivation to pursue something that I have decided.\r\n\r\nHas organizational experience from elementary school to college and is able to work in teams and individually.\r\n\r\nI have a statistical educational background in college and have several awards in scientific writing competitions and international conferences.\r\n\r\nI enjoy challenging myself to learn new things. Now I am pursuing android development at Bootcamp Arkademy. The decision to pursue android development was because I was interested in developing the android application itself and liked coding since college.\r\n\r\n\r\nBesides that, I have been certified as a data analyst from the professional institution of Airlangga University. I like solving problems and analyzing data. I am very interested in statistical programming.', '2020-09-20 19:30:07', '2020-10-04 07:05:06');

-- --------------------------------------------------------

--
-- Table structure for table `profile_recruiter`
--

CREATE TABLE `profile_recruiter` (
  `id_profile_recruiter` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `profile_image` text DEFAULT NULL,
  `company_field` varchar(100) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `instagram` varchar(100) DEFAULT NULL,
  `linkedin` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profile_recruiter`
--

INSERT INTO `profile_recruiter` (`id_profile_recruiter`, `user_id`, `profile_image`, `company_field`, `city`, `description`, `instagram`, `linkedin`, `created_at`, `updated_at`) VALUES
(1, 1, 'image-1601787183922.jpg', 'Talent Hunter', 'Jakarta', 'seaching for a great IT talent', 'https://www.instagram.com/wahyukurniawaan8/', 'https://www.linkedin.com/in/wahyukurniawaan/', '2020-10-12 00:45:42', '2020-10-12 00:45:42'),
(2, 2, NULL, NULL, NULL, NULL, NULL, NULL, '2020-10-12 01:42:33', '2020-10-12 01:42:33');

-- --------------------------------------------------------

--
-- Table structure for table `project_job_seeker`
--

CREATE TABLE `project_job_seeker` (
  `id_project` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `duration` varchar(30) DEFAULT NULL,
  `project_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project_job_seeker`
--

INSERT INTO `project_job_seeker` (`id_project`, `user_id`, `name`, `description`, `price`, `duration`, `project_image`) VALUES
(1, 1, 'Project beauty camera', 'membuat aplikasi android kamera dengan tambahan fitur efek cantik', 30000000, '5 Month', 'image-1603270503425.png'),
(2, 1, 'Project Live Control CCTV 24 Hour', 'membuat aplikasi android yang akan mengontrol cctv yang dipasang di rumah melalui android', 40000000, '8 Month', 'image-1603270471800.png'),
(3, 1, 'Project Dating Apps = Tenten', 'membuat aplikasi android pencari jodoh dengan mempertemukan pasangan bedasarkan lokasi ataupun minat', 10000000, '5 Month', 'image-1603270426542.png'),
(4, 1, 'Urgent Project pemantauan covid', 'membuat aplikasi android yang berfokus terhadap kondisi pandemik covid-19', 100000000, '2 Month', 'image-1603270372824.jpg'),
(5, 1, 'Project Aplikasi android Hiring Jobs', 'membuat aplikasi android yang membantu para pencari kerja ataupun perusahaan yang sedang mencari karyawan', 50000000, '3 Month', 'image-1603270253473.png'),
(6, 1, 'Aplikasi android Hiring Jobs software engineer', 'membuat aplikasi android yang membantu para pencari kerja dengan sistem per project khusus untuk software engineer', 45000000, '3 Month', 'image-1603270182787.jpg'),
(7, 1, 'Project Game Android Peou', 'membuat project game android bernama Peou yang bertemakan seperti tamagochi', 17000000, '10 Month', 'image-1603270057525.png'),
(8, 1, 'Project Game Android Battle Royale = Penguin arena', 'membuat project game android bernama Penguin arena bertemakan battle royal hingga 50 pemain', 30000000, '12 Month', 'image-1603269966463.png');

-- --------------------------------------------------------

--
-- Table structure for table `project_recruiter`
--

CREATE TABLE `project_recruiter` (
  `id_project_recruiter` int(11) NOT NULL,
  `project_name` varchar(100) NOT NULL,
  `project_description` text NOT NULL,
  `project_start_date` date NOT NULL,
  `project_end_date` date NOT NULL,
  `project_image` text NOT NULL,
  `repository_link` varchar(100) NOT NULL,
  `id_skill` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project_recruiter`
--

INSERT INTO `project_recruiter` (`id_project_recruiter`, `project_name`, `project_description`, `project_start_date`, `project_end_date`, `project_image`, `repository_link`, `id_skill`, `created_at`, `updated_at`) VALUES
(1, 'project backup data mobile application', 'membuat aplikasi android yang akan membackup data secara cloud', '2020-09-20', '2020-09-29', 'https://icons.iconarchive.com/icons/whyred/dsquared-bin/128/trash-yellow-full-icon.png', 'https://github.com/wahyuKurniawaan', 1, '2020-09-20 00:49:54', '2020-09-20 00:49:54'),
(2, 'test patch', 'test patch', '0000-00-00', '0000-00-00', 'test patch', 'test patch', 2, '2020-09-20 00:50:58', '2020-09-20 00:50:58'),
(32, 'project game android peperangan', 'membuat aplikasi game android dengan tema first person shooting war', '2020-09-20', '2020-09-29', 'image-1601034555025.png', 'https://github.com/wahyuKurniawaan', 1, '2020-09-25 18:49:15', '2020-09-25 18:49:15'),
(33, 'project game android peperangan', 'membuat aplikasi game android dengan tema first person shooting war', '2020-09-20', '2020-09-29', 'image-1601038762068.png', 'https://github.com/wahyuKurniawaan', 1, '2020-09-25 19:59:22', '2020-09-25 19:59:22');

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `id_skill` int(11) NOT NULL,
  `name_skill` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`id_skill`, `name_skill`) VALUES
(1, 'Kotlin'),
(2, 'Phiton'),
(3, 'Laravel'),
(4, 'Golang'),
(5, 'JavaScript'),
(6, 'PHP'),
(7, 'HTML'),
(8, 'C++'),
(9, 'Swift'),
(11, 'patch');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` text NOT NULL,
  `user_company` varchar(100) NOT NULL,
  `role_job` varchar(50) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `user_status` enum('not active','activated') NOT NULL DEFAULT 'not active',
  `user_role` enum('admin','recruiter','job seeker') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_company`, `role_job`, `phone_number`, `user_status`, `user_role`, `created_at`, `updated_at`) VALUES
(1, 'Wahyu Kurniawan', 'wahyukurniawaan@gmail.com', '$2a$10$4qmbyxsonukhx4TmAY9eF.VJcec8RRLYET/z0GpPBDBZfBWOur2y.', 'Arkademy', 'Talent Recruiter', '089630033462', 'not active', 'admin', '2020-10-11 17:41:40', '2020-10-12 00:41:40'),
(2, 'Wahyu Kurniawan', 'wahyukurniawaan@gmail.coma', '$2a$10$fVaVwDhgaCuE8JPYpi1Y6eDETNHQkptanaT.LQ1yF9HOCGddYvs.u', 'Arkademy', 'Talent Recruiter', '089630033462', 'not active', 'admin', '2020-10-11 18:42:19', '2020-10-12 01:42:19');

-- --------------------------------------------------------

--
-- Table structure for table `work_exp_job_seeker`
--

CREATE TABLE `work_exp_job_seeker` (
  `id_work_exp` int(11) NOT NULL,
  `id_profile_job_seeker` int(11) NOT NULL,
  `position` varchar(100) NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `work_exp_job_seeker`
--

INSERT INTO `work_exp_job_seeker` (`id_work_exp`, `id_profile_job_seeker`, `position`, `company_name`, `start_date`, `end_date`, `description`) VALUES
(1, 4, 'test patch', 'test patch', '0000-00-00', '0000-00-00', 'test patch'),
(2, 2, 'Senior Android Developer', 'Arkademy Tech', '2019-08-01', '2019-11-01', 'membuat project Hiring application bedasarkan project yang ditawarkan oleh perusahaan'),
(4, 1, 'Junior Android Developer', 'Arkademy', '2020-08-01', '2020-11-01', 'membuat project Hiring application bedasarkan project yang ditawarkan oleh perusahaan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account_job_seeker`
--
ALTER TABLE `account_job_seeker`
  ADD PRIMARY KEY (`id_account_job_seeker`) USING BTREE;

--
-- Indexes for table `account_recruiter`
--
ALTER TABLE `account_recruiter`
  ADD PRIMARY KEY (`id_account_recruiter`) USING BTREE;

--
-- Indexes for table `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`id_offer`),
  ADD KEY `constraint_project_id` (`id_project`),
  ADD KEY `constraint_profile_job_seeker` (`id_profile_job_seeker`);

--
-- Indexes for table `portofolio_job_seeker`
--
ALTER TABLE `portofolio_job_seeker`
  ADD PRIMARY KEY (`id_portofolio`);

--
-- Indexes for table `profile_job_seeker`
--
ALTER TABLE `profile_job_seeker`
  ADD PRIMARY KEY (`id_profile_job_seeker`),
  ADD KEY `fk_account_have_profile` (`id_account_job_seeker`);

--
-- Indexes for table `profile_recruiter`
--
ALTER TABLE `profile_recruiter`
  ADD PRIMARY KEY (`id_profile_recruiter`),
  ADD KEY `CONSTRAIN_USER_ID` (`user_id`) USING BTREE;

--
-- Indexes for table `project_job_seeker`
--
ALTER TABLE `project_job_seeker`
  ADD PRIMARY KEY (`id_project`),
  ADD KEY `constraint_id_user` (`user_id`);

--
-- Indexes for table `project_recruiter`
--
ALTER TABLE `project_recruiter`
  ADD PRIMARY KEY (`id_project_recruiter`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id_skill`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `work_exp_job_seeker`
--
ALTER TABLE `work_exp_job_seeker`
  ADD PRIMARY KEY (`id_work_exp`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account_job_seeker`
--
ALTER TABLE `account_job_seeker`
  MODIFY `id_account_job_seeker` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `account_recruiter`
--
ALTER TABLE `account_recruiter`
  MODIFY `id_account_recruiter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `offer`
--
ALTER TABLE `offer`
  MODIFY `id_offer` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `portofolio_job_seeker`
--
ALTER TABLE `portofolio_job_seeker`
  MODIFY `id_portofolio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `profile_job_seeker`
--
ALTER TABLE `profile_job_seeker`
  MODIFY `id_profile_job_seeker` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `profile_recruiter`
--
ALTER TABLE `profile_recruiter`
  MODIFY `id_profile_recruiter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `project_job_seeker`
--
ALTER TABLE `project_job_seeker`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `project_recruiter`
--
ALTER TABLE `project_recruiter`
  MODIFY `id_project_recruiter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `id_skill` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `work_exp_job_seeker`
--
ALTER TABLE `work_exp_job_seeker`
  MODIFY `id_work_exp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `offer`
--
ALTER TABLE `offer`
  ADD CONSTRAINT `constraint_profile_job_seeker` FOREIGN KEY (`id_profile_job_seeker`) REFERENCES `profile_job_seeker` (`id_profile_job_seeker`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `constraint_project_id` FOREIGN KEY (`id_project`) REFERENCES `project_job_seeker` (`id_project`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `profile_job_seeker`
--
ALTER TABLE `profile_job_seeker`
  ADD CONSTRAINT `fk_account_have_profile` FOREIGN KEY (`id_account_job_seeker`) REFERENCES `account_job_seeker` (`id_account_job_seeker`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `profile_recruiter`
--
ALTER TABLE `profile_recruiter`
  ADD CONSTRAINT `constraint_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_job_seeker`
--
ALTER TABLE `project_job_seeker`
  ADD CONSTRAINT `constraint_id_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
