import React from "react";
interface IDCardProps {
    profilepic: string;
}
const Userimgicon = (props: IDCardProps) => {
    return (
        <div>
            <span>{props.profilepic}</span>
        </div>
    );
};

export default Userimgicon;
