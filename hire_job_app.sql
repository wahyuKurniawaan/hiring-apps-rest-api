-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2020 at 12:52 PM
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
  `id_skill` int(11) NOT NULL,
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

INSERT INTO `profile_job_seeker` (`id_profile_job_seeker`, `id_account_job_seeker`, `id_portofolio_job_seeker`, `id_skill`, `email`, `full_name`, `job_title`, `status_job`, `address`, `city`, `workplace`, `image`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 'wahyukurniawaan@gmail.com', 'Wahyu Kurniawan', 'Android Developer', 'full time', 'Jl. asia afrika', 'Jakarta', 'Arkademy', 'no pic', 'sedang mengikuti bootcamp', '2020-09-19 20:00:10', '2020-09-19 20:00:10'),
(2, 3, 3, 3, 'test patch email', 'test patch name', 'test patch job title', 'internship', 'test patch address', 'test patch city', 'test patch workplace', 'test patch image', 'test patch description', '2020-09-19 20:00:28', '2020-09-19 20:00:28'),
(4, 2, 2, 2, 'budar@gmail.com', 'Budi Darmawan', 'Android Developer', 'freelancer', 'Jl. asia afrika', 'Jakarta', 'Arkademy', 'no pic', 'sedang mengikuti bootcamp', '2020-09-20 19:23:55', '2020-09-20 19:23:55'),
(5, 3, 3, 3, 'dion@hotmail.com', 'Ardion Massaid', 'Web Developer', 'full time', 'Jl. soekarno hatta', 'Jawa Barat', 'Arkademy', 'no pic', 'sedang mengikuti bootcamp', '2020-09-20 19:25:28', '2020-09-20 19:25:28'),
(6, 5, 5, 4, 'aliyudin@menkeu.go.id', 'Ilham Aliyuddin', 'Android Developer', 'full time', 'Jl. istana merdeka', 'Bandung', 'Arkademy', 'no pic', 'sedang mengikuti bootcamp', '2020-09-20 19:26:51', '2020-09-20 19:26:51'),
(7, 6, 6, 5, 'iksannnn@yahoo.com', 'Khairul Ikhsan', 'Android Developer', 'full time', 'Jl. istana merdeka', 'Bandung', 'Arkademy', 'no pic', 'sedang mengikuti bootcamp', '2020-09-20 19:28:15', '2020-09-20 19:28:15'),
(8, 7, 7, 6, 'mrizki12@gmail.com', 'Muhammad Rizki', 'Android Developer', 'full time', 'Jl. istana merdeka', 'Bandung', 'Arkademy', 'no pic', 'sedang mengikuti bootcamp', '2020-09-20 19:28:45', '2020-09-20 19:28:45'),
(9, 8, 8, 7, 'masrei@gmail.com', 'Reyhan Bayzaki', 'Android Developer', 'full time', 'Jl. istana merdeka', 'Bandung', 'Arkademy', 'no pic', 'sedang mengikuti bootcamp', '2020-09-20 19:29:44', '2020-09-20 19:29:44'),
(10, 9, 9, 8, 'kakros@gmail.com', 'Rosyida Widadina', 'Android Developer', 'full time', 'Jl. istana merdeka', 'Bandung', 'Arkademy', 'no pic', 'sedang mengikuti bootcamp', '2020-09-20 19:30:07', '2020-09-20 19:30:07'),
(14, 1, 1, 1, 'test email', 'test name', 'Android Developer', 'full time', 'test address', 'Jakarta', 'Arkademy', 'no pic', 'sedang mengikuti bootcamp', '2020-09-21 11:22:20', '2020-09-21 11:22:20'),
(15, 1, 1, 1, 'test email', 'test name', 'Android Developer', 'full time', 'test address', 'Jakarta', 'Arkademy', 'no pic', 'sedang mengikuti bootcamp', '2020-09-21 11:25:42', '2020-09-21 11:25:42'),
(17, 2, 2, 2, 'test presentasi', 'test presentasi', 'Android Developer', 'full time', 'test address', 'Jakarta', 'Arkademy', 'no pic', 'sedang mengikuti bootcamp', '2020-09-24 23:00:52', '2020-09-24 23:00:52'),
(18, 2, 2, 2, 'test presentasi', 'test presentasi', 'Android Developer', 'full time', 'test address', 'Jakarta', 'Arkademy', 'image-1601202826925.png', 'undefined', '2020-09-27 17:33:46', '2020-09-27 17:33:46');

-- --------------------------------------------------------

--
-- Table structure for table `profile_recruiter`
--

CREATE TABLE `profile_recruiter` (
  `id_profile_recruiter` int(11) NOT NULL,
  `id_account_recruiter` int(11) NOT NULL,
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
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profile_recruiter`
--

INSERT INTO `profile_recruiter` (`id_profile_recruiter`, `id_account_recruiter`, `email`, `full_name`, `job_title`, `linkedin`, `company_name`, `company_field`, `company_address`, `city`, `description`, `company_website`, `company_phone_number`, `created_at`, `updated_at`) VALUES
(1, 1, 'wahyukurniawaan@gmail.com', 'Wahyu Kurniawan', 'Android Developer', 'not have yet', 'Arkademy', 'Talent IT Recruiter', 'online', 'Indonesia', 'mencari talent mobile application yang siap bekerja', 'https://www.arkademy.com/', '+628111848182', '2020-09-19 22:28:56', '2020-09-19 22:28:56'),
(2, 3, 'test patch email', 'test patch full name', 'test patch job title', 'test patch linkedin', 'test patch company', 'test patch com field', 'patch company address', 'patch city', 'patch description', 'patch website', '5544332211', '2020-09-19 22:29:22', '2020-09-19 22:29:22');

-- --------------------------------------------------------

--
-- Table structure for table `project_job_seeker`
--

CREATE TABLE `project_job_seeker` (
  `id_project` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `duration` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project_job_seeker`
--

INSERT INTO `project_job_seeker` (`id_project`, `name`, `description`, `price`, `duration`) VALUES
(1, 'Project beauty camera', 'membuat aplikasi android kamera dengan tambahan fitur efek cantik', 30000000, '5 Month'),
(2, 'Project Live Control CCTV 24 Hour', 'membuat aplikasi android yang akan mengontrol cctv yang dipasang di rumah melalui android', 50000000, '8 Month'),
(6, 'Project Dating Apps = Tenten', 'membuat aplikasi android pencari jodoh dengan mempertemukan pasangan bedasarkan lokasi ataupun minat', 10000000, '3 Month'),
(7, 'Urgent Project pemantauan covid', 'membuat aplikasi android yang berfokus terhadap kondisi pandemik covid-19', 150000000, '2 Month'),
(9, 'Project Aplikasi android Hiring Jobs', 'membuat aplikasi android yang membantu para pencari kerja ataupun perusahaan yang sedang mencari karyawan', 50000000, '3 Month'),
(11, 'Aplikasi android Hiring Jobs software engineer', 'membuat aplikasi android yang membantu para pencari kerja dengan sistem per project khusus untuk software engineer', 45000000, '3 Month'),
(12, 'Project Game Android Peou', 'membuat project game android bernama Peou yang bertemakan seperti tamagochi', 17000000, '10 Month'),
(14, 'Project Game Android Battle Royale = Penguin arena', 'membuat project game android bernama Penguin arena bertemakan battle royal hingga 50 pemain', 30000000, '12 Month'),
(16, 'test patch request', 'test patch description', 1000, ' satu tahun'),
(17, 'test2', 'test2', 2000000, '2 Month'),
(18, 'test3', 'test3', 2000000, '2 Month'),
(19, 'test4', 'test4', 4000000, '4 Month');

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
  `user_role` enum('job seeker','recruiter','admin') NOT NULL,
  `user_status` enum('not active','activated') NOT NULL DEFAULT 'not active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_role`, `user_status`, `created_at`, `updated_at`) VALUES
(1, 'Wahyu Kurniawan', 'wahyukurniawaan@gmail.com', '$2a$10$3NqABM9lyV5dJOCRYucglOmkHYyEIAfimvfsa3.c7d7D9//8KQyiG', 'admin', 'activated', '2020-09-23 08:31:07', '2020-09-26 17:47:59'),
(2, 'Job Seeker Dummy', 'jobseeker@dummy.com', '$2a$10$f0N8G.QxYoZxhEdxKYKIruwvukuUPneU5Y7PzUJwp0JByRgdYYnqW', 'job seeker', 'activated', '2020-09-23 08:31:25', '2020-09-27 08:54:10'),
(3, 'Recruiter Dummy', 'recruiter@dummy.com', '$2a$10$mXgmSCf145JR8YPnoHEQ7.cJL7Vgs9mgCwGkzknVrjhudY7N6sZqS', 'recruiter', 'activated', '2020-09-23 08:43:44', '2020-09-27 08:53:32');

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
  ADD KEY `fk_account_recruiter_have_profile` (`id_account_recruiter`);

--
-- Indexes for table `project_job_seeker`
--
ALTER TABLE `project_job_seeker`
  ADD PRIMARY KEY (`id_project`);

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
-- AUTO_INCREMENT for table `portofolio_job_seeker`
--
ALTER TABLE `portofolio_job_seeker`
  MODIFY `id_portofolio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `profile_job_seeker`
--
ALTER TABLE `profile_job_seeker`
  MODIFY `id_profile_job_seeker` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `profile_recruiter`
--
ALTER TABLE `profile_recruiter`
  MODIFY `id_profile_recruiter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `project_job_seeker`
--
ALTER TABLE `project_job_seeker`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

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
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `work_exp_job_seeker`
--
ALTER TABLE `work_exp_job_seeker`
  MODIFY `id_work_exp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `profile_job_seeker`
--
ALTER TABLE `profile_job_seeker`
  ADD CONSTRAINT `fk_account_have_profile` FOREIGN KEY (`id_account_job_seeker`) REFERENCES `account_job_seeker` (`id_account_job_seeker`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `profile_recruiter`
--
ALTER TABLE `profile_recruiter`
  ADD CONSTRAINT `fk_account_recruiter_have_profile` FOREIGN KEY (`id_account_recruiter`) REFERENCES `account_recruiter` (`id_account_recruiter`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
