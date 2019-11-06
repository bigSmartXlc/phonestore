-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2019-07-16 05:54:36
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food`
--

-- --------------------------------------------------------

--
-- 表的结构 `fooddetails`
--

CREATE TABLE `fooddetails` (
  `fid` int(11) NOT NULL,
  `foodname` varchar(20) NOT NULL,
  `pic` varchar(20) NOT NULL,
  `foodfunction` varchar(100) DEFAULT NULL,
  `coke` varchar(5) NOT NULL,
  `diffficult` varchar(5) NOT NULL,
  `member` varchar(10) NOT NULL,
  `taste` varchar(10) NOT NULL,
  `readytime` varchar(10) NOT NULL,
  `coketime` varchar(10) NOT NULL,
  `author` varchar(10) NOT NULL,
  `details` varchar(200) DEFAULT NULL,
  `making` varchar(100) NOT NULL,
  `support` varchar(100) DEFAULT NULL,
  `teps` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `fooddetails`
--

INSERT INTO `fooddetails` (`fid`, `foodname`, `pic`, `foodfunction`, `coke`, `diffficult`, `member`, `taste`, `readytime`, `coketime`, `author`, `details`, `making`, `support`, `teps`) VALUES
(1, '红烧冰糖猪手', 'img/icon/01.jpg', '润肺化痰|化痰止咳|清热去火|抵抗力|高血压|消食', '炒', '新手尝试', '2', '家常味', '15', '15', '三撮毛', '这是一道非常值得一试的猪蹄食谱，美味而又令人垂涎欲滴。光滑洁白，营养丰富的猪蹄加入丰富的调味料一起高压炖煮，色泽红亮，晶莹剔透，软糯香甜，肥而不腻。筋弹肉嫩的冰糖猪蹄，一口吃下去唇齿留香，回味无穷，充分刺激你的味蕾。', '冰糖|洋葱', '辣椒（红，尖，干）|食用盐|料酒', '1、首先准备猪爪一到两个剁几块，冰糖适量，八角几个，葱姜适量，老抽四勺，生抽六勺，迷迭香一段，半锅水烧开加两勺料酒下猪爪汆烫去血末备用即可；|2、然后在锅里倒入少许莎吉亚葵花籽油，倒入冰糖，冰糖溶化后下猪爪翻炒到肉皮变色，下所有调料和酱油再翻炒三分钟，炒到肉皮酱红即可；|3、最后加没过猪爪的水，大火烧开，转小火炖两小时至软糯后就可以出锅上桌啦|4、入口即化，软糯美味的红烧冰糖猪手就做好了，喜欢的话，自己可以动手试试吧~'),
(2, '肉末茄子', 'img/icon/02.jpg', '清热解毒|开胃', '炒', '新手尝试', '2', '家常味', '15', '15', '三撮毛', '肉末茄子入口软糯香滑，口味咸香，是一道非常常见的下饭菜，用“饭扫光”来形容一点也不为过。 现在，虽然茄子一年四季都有，但还要数夏天的最为好吃，营养也更丰富。其性凉味甘，有清热解毒，保护心血管等作用，常食极有好处。', '小红辣椒|肉末', '食盐', '第一步：将茄子切成4-5厘米长的条，小红辣椒切段，葱姜蒜切末备用。|第二步,往茄条中放入1小勺盐，然后拌匀腌制10分钟备用。|第三步 往肉馅中放入半只蛋清、1小勺料酒、1小勺玉米淀粉然后抓匀腌制10分钟。|第四步：锅中倒入适量的莎吉亚葵花籽油（平时炒菜的油量），油热后将茄条放入锅中煸炒至其变软，然后盛出备用。|第五步：再往锅中倒入少许油，油热后将肉馅放入锅迅速打散，炒至其颜色变白。|第六步：往锅中依次放入1勺老抽、1勺糖面酱、半勺白糖煸炒至肉末上色。如图|第七步：将红辣椒、葱姜蒜放入锅中煸炒出香味。|第八步：将茄条放入锅翻炒匀均，然后放入半勺盐、半勺鸡精调味，出锅前淋少许香油即可。（因为茄子在腌的时候放过盐，酱油和甜面酱中也有盐味，所以，最后放盐的时候一定要小心，建议尝一下再放）'),
(3, '肉松皮蛋豆腐', 'img/icon/03.jpg', '清热解毒|预防感冒|散瘀止疼|强身健体|治肠炎|开胃', '拌', '初级入门', '3', '家常味', '5', '5', 'meggy跳舞的苹果', '皮蛋豆腐是一道经典的家常小菜，用料简单，但是味道却独特而且让人喜欢。皮蛋，也有称松花蛋，它能刺激消化器官，增进食欲，促进营养的消化吸收；皮蛋性寒，所以吃时加些姜末，且添独特美味。豆腐宜使用内酯豆腐或者嫩豆腐，细腻滑爽，入口即化。吃之前从冰箱中取出，趁着凉凉的劲儿，吃起来太爽了。', '内脂豆腐|姜|自制肉松|小葱|蒜', '生抽|醋', '内酯豆腐盒的底部四个角用剪刀剪掉一小块，这样空气能进去，能完整地脱模，豆腐不碎不烂,豆腐倒扣在盘中，用刀划成小块|皮蛋用利刀切成小块，也可以用干净的缝衣线拉出小块来，看哪个更方便用哪个吧；姜葱蒜切末，比例随喜好调整|在姜葱蒜末中倒入适量的醋、生抽、混合均匀|将皮蛋摆放在豆腐上，将姜葱蒜汁淋在上面，最后再铺撒上自制的肉松，如果没有肉松此步可省略。'),
(4, '西芹虾仁', 'img/icon/04.jpg', '镇静助眠|利尿|防癌|贫血', '炒', '未知', '未知', '家常味', '未知', '15', '原味生活家', '西芹自身带有独特的清香味，营养价值又高，尤其是高血压的人可以适当多吃一些', '虾仁', '料酒|白胡椒|食用油|盐', '西芹洗净，斜刀切成菱形|葱姜切片|锅热倒入食用油，放入虾仁炒制虾仁变色盛出|锅内底油放入葱姜炒出香味|放入西芹翻炒几下，加少许盐|放入炒好的虾仁，再翻炒几下就好了'),
(5, '牦油豆腐', 'img/icon/05.jpg', '解暑|开胃', '炒', '新手尝试', '2', '家常味', '5', '10', '孔老师教做菜', '豆腐虽不是什么灵丹妙药，但富含丰富的蛋白质，有益健康。做法也很简单，是我们餐桌上的家常菜。这道“蚝油豆腐”将豆腐皮煎的脆脆的，吸附着浓浓的蚝油酱汁，咬一口下去，鲜香漫开来，就着大米饭别提多下饭了！虽然没有肉，但是加了蚝油和生抽，豆腐就很入味了。出锅后再放点青蒜，给它增加一点香味，看上去也更有食欲，喜欢豆腐的你，可一定要试试这道菜！', '豆腐一块', '牦油2勺|青蒜|生抽1勺|葱蒜适量', '豆腐一切两半，再切成薄片。（选用嫩豆腐，口感会更好些。嫩豆腐，又称南豆腐、软豆腐、石膏豆腐，与北豆腐相比，质地比较软嫩、细腻。）|鸡蛋打散成蛋液待用。|依次放入豆腐片，让豆腐片整个都黏上蛋液。|不粘锅中适量底油，油五成热，放入豆腐片。|小火煎至两面金黄色。|煎好的豆腐片盛出待用|炒锅中适量底油烧热，放入葱段，蒜片爆香。|加入小半碗水。|倒入豆腐片，加入2勺蚝油。|再加入1勺生抽。（蚝油和生抽本身就有咸味，不用再加盐了。）|小火慢炖5分钟左右。|汤汁快收干时，撒入青蒜段来增香。|收汁时稍微留点汁，装盘即可。|');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fooddetails`
--
ALTER TABLE `fooddetails`
  ADD PRIMARY KEY (`fid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `fooddetails`
--
ALTER TABLE `fooddetails`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
