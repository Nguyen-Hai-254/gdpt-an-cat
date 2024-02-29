import { Box, Typography } from "@mui/material";

export const About = () => {
    const image = require('../assests/images/chuahoithuong.jpg')
    return (
        <Box>
            < Box sx={{
                display: { xs: 'block', sm: 'flex' },
                alignItems: 'center',
                mt: '50',
                mb: '50',
                textAlign: 'center'
            }
            }>
                <Box component='img'
                    src={image}
                    alt={image}
                    sx={{
                        width: { xs: '90%', sm: '60%', md: '40%' },
                        ml: { xs: '0', sm: '15px', md: '50px' }
                    }}>
                </Box>
                <Box sx={{
                    ml: { xs: '15px', sm: '30px', md: '50px' },
                    mr: { xs: '15px', md: '50px' },
                    width: { md: '50%' }
                }} >
                    <Typography variant="h2" sx={{
                        position: "relative",
                        mb: '30px',
                        textAlign: 'left',
                        mt: { xs: '30px', md: '0' },

                        '&:after': {
                            position: "absolute",
                            content: '""',
                            background: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
                            height: "4px",
                            width: "160px",
                            bottom: -5,
                            left: 0,
                        }
                    }}>GĐPT An Cát</Typography>
                    <Typography variant="h5" sx={{
                        lineHeight: "24px",
                        fontSize: '15px',
                        textAlign: 'justify'
                    }}>GĐPT An Cát hiện có 20 anh chị huynh trưởng các cấp cùng với hơn 60 đoàn sinh các ngành đang sinh hoạt tại đây. Với mong muốn xây dựng một tổ chức vừa giáo dục vừa vui chơi lành mạnh cho thế hệ thanh thiếu đồng niên, huynh trưởng và đoàn sinh An Cát luôn luôn nổ lực và cố gắng, trau dồi thêm kiến thức lẫn kĩ năng để hướng dẫn các em có thể phát triển bản thân để giúp đời, giúp đạo. Bên cạnh đó, cùng với sự dẫn dắt tận tình của Sư trụ trì cũng như nhiệt huyết của ban huynh trưởng, đoàn sinh đã và đang cố gắng xây dựng  phát triển chùa Hội Thượng - GĐPT AN CÁT ngày càng vững mạnh.</Typography>
                </Box>
            </Box>
        </Box >
    );
    {/* <div className="container_about">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <img src={image} className="img-responsive" alt="GĐPT An Cát" />{" "}
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>GĐPT An Cát</h2>
                            <Typography variant="h5" sx={{
                                lineHeight: "24px",
                                fontSize: '15px',
                                textAlign: 'justify'
                            }}>GĐPT An Cát, hiện có 20 anh chị huynh trưởng các cấp cùng với 60 đoàn sinh các ngành đang sinh hoạt tại đây. Với mong muốn xây dựng một tổ chức vừa giáo dục vừa vui chơi lành mạnh cho thế hệ thanh thiếu đồng niên, huynh trưởng và đoàn sinh An Cát luôn luôn nổ lực và cố gắng, trau dồi thêm kiến thức lẫn kĩ năng để hướng dẫn các em có thể phát triển bản thân để giúp đời, giúp đạo. Cùng với sự dẫn dắt tận tình của Sư trụ trì cũng như nhiệt huyết của ban huynh trưởng, đoàn sinh, đã và đang cố gắng xây dựng  phát triển chùa Hội Thượng - GĐPT AN CÁT ngày càng vững mạnh.</Typography>
                        </div>
                    </div>
                </div>
            </div> */}
    // < Box sx={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     mt: '50',
    //     mb: '50'
    // }
    // }>
    //     <Box component='img'
    //         src={image}
    //         alt={image}
    //         sx={{ width: { xs: '', sm: '', md: '60%' } }}>
    //     </Box>
    //     <Box sx={{
    //         ml: '25px',
    //         mr: { xs: '15px', md: '50px' },
    //         width: { xs: '100%', md: '50%' }
    //     }} >
    //         <h2>GĐPT An Cát</h2>
    //         <Typography variant="h5" sx={{
    //             lineHeight: "24px",
    //             fontSize: '15px',
    //             textAlign: 'justify'
    //         }}>GĐPT An Cát, hiện có 20 anh chị huynh trưởng các cấp cùng với 60 đoàn sinh các ngành đang sinh hoạt tại đây. Với mong muốn xây dựng một tổ chức vừa giáo dục vừa vui chơi lành mạnh cho thế hệ thanh thiếu đồng niên, huynh trưởng và đoàn sinh An Cát luôn luôn nổ lực và cố gắng, trau dồi thêm kiến thức lẫn kĩ năng để hướng dẫn các em có thể phát triển bản thân để giúp đời, giúp đạo. Cùng với sự dẫn dắt tận tình của Sư trụ trì cũng như nhiệt huyết của ban huynh trưởng, đoàn sinh, đã và đang cố gắng xây dựng  phát triển chùa Hội Thượng - GĐPT AN CÁT ngày càng vững mạnh.</Typography>
    //     </Box>
    // </ >
};
