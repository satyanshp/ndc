import React from "react";
import ndc from "../img/NDC.png";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="header__logo">
				<img className="header__img" src={ndc} alt="Ncet-logo" />
			</div>
			<div className="header__listsec">
				<div className="header_firstlist">
					<ul className="header__list1">
						<li>about us</li>
						<li>programs</li>
						<li>ndc team</li>
						<li>life @ ndc</li>
						<li>sports</li>
						{/* <SearchIcon className="search__logo"/> */}
					</ul>

					<ul className="header__list2">
						<li>research & library</li>
						<li>career & placements</li>
						<li>facilities</li>
					</ul>
				</div>
				<SearchIcon className=""
				/>
			</div>
		</div>
	);
};

export default Header;
