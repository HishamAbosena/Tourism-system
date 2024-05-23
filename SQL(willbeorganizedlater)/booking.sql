-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2024 at 11:48 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `BookingNo` int(11) NOT NULL,
  `RoomID` int(11) DEFAULT NULL,
  `ArrivalDate` varchar(10) DEFAULT NULL,
  `DepartureDate` varchar(10) DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `cardNumber` varchar(16) DEFAULT NULL,
  `TotalPrice` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`BookingNo`, `RoomID`, `ArrivalDate`, `DepartureDate`, `Phone`, `cardNumber`, `TotalPrice`) VALUES
(9, 2, '05/15/2024', '05/22/2024', '01421412412', NULL, 1050.00);

-- --------------------------------------------------------

--
-- Table structure for table `creditcard`
--

CREATE TABLE `creditcard` (
  `CardNumber` varchar(16) NOT NULL,
  `CardHolderName` varchar(100) DEFAULT NULL,
  `ExpiryDate` date DEFAULT NULL,
  `CVV` varchar(4) DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `type` varchar(50) NOT NULL,
  `stars` int(11) NOT NULL,
  `beds` int(11) NOT NULL,
  `bathrooms` int(11) NOT NULL,
  `kitchen` tinyint(1) NOT NULL,
  `free_cancellation` tinyint(1) NOT NULL,
  `no_prepayment` tinyint(1) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`id`, `name`, `location`, `type`, `stars`, `beds`, `bathrooms`, `kitchen`, `free_cancellation`, `no_prepayment`, `photo`, `room_id`) VALUES
(1, 'Grand Hotel', 'Downtown', 'Suite', 5, 2, 1, 1, 1, 1, 'https://img.freepik.com/premium-photo/minsk-belarus-august-2017-columns-guestroom-hall-reception-modern-luxury-hotel_97694-6572.jpg', 1),
(2, 'Seaside Resort', 'Beachfront', 'Apartment', 4, 3, 2, 1, 1, 0, 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714953600&semt=sph', 2),
(3, 'City Plaza Hotel', 'City Center', 'Room', 3, 1, 1, 0, 0, 0, 'https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-bathroom_105762-1791.jpg', 3),
(4, 'Mountain View Lodge', 'Mountain', 'Cabin', 4, 3, 2, 1, 1, 1, 'https://www.venuesearchlondon.com/media/image/46661/o/hotel-amano-covent-garden-amano-bar-basement.jpeg\')', NULL),
(5, 'Riverside Inn', 'Riverside', 'Room', 3, 2, 1, 0, 1, 1, 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/02/24/497843/192206/hotel_room_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_3134958_o.jpg', NULL),
(6, 'Luxury Suites', 'Downtown', 'Suite', 5, 3, 2, 1, 1, 1, 'https://plus.unsplash.com/premium_photo-1661902745675-11846e4f9a41?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D', NULL),
(7, 'Beachside Villas', 'Beachfront', 'Villa', 5, 4, 3, 2, 1, 1, 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/08/16/464103/168771/bedroom_hotel_suites_designed_a_complete_81_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1863567.jpg', NULL),
(8, 'Cosy Cottage', 'Countryside', 'Cottage', 4, 2, 1, 1, 1, 0, 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/08/16/464103/168878/bedroom_hotel_suites_designed_a_complete_161_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1864370.jpg', NULL),
(9, 'Urban Oasis', 'City Center', 'Apartment', 4, 2, 1, 1, 1, 1, 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/08/16/464103/168808/bedroom_hotel_suites_designed_a_complete_109_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1863848.jpg', NULL),
(10, 'Tranquil Retreat', 'Forest', 'Cabin', 3, 2, 1, 0, 1, 1, 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/08/16/464103/169241/bedroom_hotel_suites_designed_a_complete_25_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1867199.jpg', NULL),
(11, 'Sunset View Hotel', 'Hilltop', 'Room', 3, 1, 1, 0, 1, 1, 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/08/16/464103/169270/bedroom_hotel_suites_designed_a_complete_48_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1867469_o.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `RoomID` int(11) NOT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  `HasKitchen` tinyint(1) DEFAULT NULL,
  `NumBedrooms` int(11) DEFAULT NULL,
  `NumBathrooms` int(11) DEFAULT NULL,
  `Image1` varchar(255) DEFAULT NULL,
  `Image2` varchar(255) DEFAULT NULL,
  `Image3` varchar(255) DEFAULT NULL,
  `Image4` varchar(255) DEFAULT NULL,
  `Description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`RoomID`, `Price`, `HasKitchen`, `NumBedrooms`, `NumBathrooms`, `Image1`, `Image2`, `Image3`, `Image4`, `Description`) VALUES
(1, 200.00, 1, 2, 1, 'https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=2119&height=1195&fit=crop&format=pjpg&auto=webp', 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iyix1OYhVxdA/v2/-1x-1.jpg', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/240702591.jpg?k=daebaa14ebf070167ea48834094a11435250eaa6d5849cb937186a2d5c4ebf08&o=&hp=1', 'Cozy room with a kitchen, two bedrooms, and one bathroom.'),
(2, 150.00, 0, 1, 1, 'https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=2119&height=1195&fit=crop&format=pjpg&auto=webp', 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iyix1OYhVxdA/v2/-1x-1.jpg', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/240702591.jpg?k=daebaa14ebf070167ea48834094a11435250eaa6d5849cb937186a2d5c4ebf08&o=&hp=1', 'Comfortable room with one bedroom and one bathroom.'),
(3, 250.00, 1, 3, 2, 'https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=2119&height=1195&fit=crop&format=pjpg&auto=webp', 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iyix1OYhVxdA/v2/-1x-1.jpg', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/240702591.jpg?k=daebaa14ebf070167ea48834094a11435250eaa6d5849cb937186a2d5c4ebf08&o=&hp=1', 'Spacious room with a fully equipped kitchen, three bedrooms, and two bathrooms.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`BookingNo`),
  ADD KEY `RoomID` (`RoomID`),
  ADD KEY `fk_credit_card` (`cardNumber`);

--
-- Indexes for table `creditcard`
--
ALTER TABLE `creditcard`
  ADD PRIMARY KEY (`CardNumber`);

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_room_id` (`room_id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`RoomID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `BookingNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `RoomID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`RoomID`) REFERENCES `rooms` (`RoomID`),
  ADD CONSTRAINT `fk_credit_card` FOREIGN KEY (`cardNumber`) REFERENCES `creditcard` (`CardNumber`);

--
-- Constraints for table `hotels`
--
ALTER TABLE `hotels`
  ADD CONSTRAINT `fk_room_id` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`RoomID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
