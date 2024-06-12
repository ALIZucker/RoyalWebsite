import React from 'react';


export type Imageprops = {
    src: string
}

type arrayImg = {
    srcarr: Imageprops[]
}

const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
}


const Daste: React.FC<arrayImg> = ( { srcarr }: arrayImg) => {
    return (
        <div style={styles}>
            {
                srcarr.map(value => {return(<ImageShow src={value.src}/> )})
            }

        </div>
    );
};
const ImageShow: React.FC<Imageprops> = (props: Imageprops) => {
    return (
        <React.Fragment>
            <img className="w-[45vw] h-[18vh] mt-8 rounded-md object-fill object-center lg:w-[23vw] lg:h-[32vh] sadowDste"
                 src={props.src}/>
        </React.Fragment>
    );
}
export default Daste;