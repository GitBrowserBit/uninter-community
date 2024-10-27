interface ButtonProps{
    name: string;
    style?: React.CSSProperties;
    onclick?: () => void;
    className?: string;
}
export default function Button({name, style,onclick,className, ...rest}: ButtonProps){
    return(
        <button className={className} onClick={onclick} style={style} {...rest}>
            {name}
        </button>
    )
}