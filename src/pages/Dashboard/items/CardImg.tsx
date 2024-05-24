import { Card, CardCover } from "@mui/joy";
import { CardImgType } from "../../../model/pages";


const CardImg = ({img}: CardImgType) => {
    return (

        <Card component="li" sx={{ position: 'relative', width: '100%', paddingTop: '100%', flexGrow: 1 }}>
            <CardCover
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'sm',
                boxShadow: 'md',
            }}
            >
            <img
                width={50}
                src={img}
                loading="lazy"
                alt=""
            />
            </CardCover> 
        </Card>
    )
}

export default CardImg;