import { Input } from "postcss";
import React from "react";
import {BiChevronRight, BiSearch, BiShareAlt} from "react-icons/bi";
const NavSm = () => {
    return (
        <>
            <div className="text-gray-800 flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All starts Here!</h3>
                    
                </div>
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
    )
};

const NavMd = () => {
    return (
        <>
            <div className="w-full flex gap-3 items-center bg-white px-3 py-2">
                <BiSearch />
                <Input 
                type="search"
                className="w-full"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                />   
            </div>
        </>
    )
};
const NavLg = () => {};

const MovieNavbar = () => {
    return (
        <>
            <nav className=" px-2 py-4">
                <div className="md:hidden">{/*Mobile Screen*/}
                <NavSm/>
                </div>
                <div className="hidden md:block lg:hidden">{/*Tablet Screen*/}
                <NavMd />
                </div>
                <div className="bg-gray-400 hidden lg:flex">{/*Large Screen*/}
                <NavLg />
                </div>
            </nav>
        </>
    );

};

export default MovieNavbar;