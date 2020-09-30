import React from "react";
import "./Header.css";
//home/flag/subscriptionsooutlined/ storefront/
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import FlagIcon from "@material-ui/icons/Flag";

import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSZVl9oCrZ5FlZZN8KdmNWDDg6O0jyX__7Bg&usqp=CAU" />
			</div>
			<div className="header__input">
				<SearchIcon />
				<input placeholder="Search Facebook" />
			</div>
			<div className="header__center">
				<div className="header__option">
					<AddIcon />
				</div>
				<div className="header__option">
					<FlagIcon />
				</div>
				<div className="header__option">
					<SubscriptionsOutlinedIcon />
				</div>
				<div className="header__option">
					<AddIcon />
				</div>
			</div>
			<div className="header__right">
				<AddIcon />
				<ForumIcon />
				<NotificationsActiveIcon />
				<AddIcon />
			</div>
		</div>
	);
};

export default Header;
