import { Box, Container, Typography } from "@mui/material";
import SidebarRight from "../../components/sidebarRight";


const LongHieuChimOanhVu = () => {
    return (
        <Container sx={{
            maxWidth: '100% !important',
            display: 'flex',
            mt: 5,
            ml: 0,
            pl: 0,
            pr: 1,
        }}>
            <Box sx={{
                width: { xs: "90%", md: "60%" },
                margin: "0 auto"
            }}>
                <Typography variant="h3" sx={{ fontWeight: "700", color: "#555" }}>
                    Câu chuyện: Lòng hiếu của chim Oanh Vũ
                </Typography>

                <img
                    alt="lòng hiếu chim oanh vũ"
                    src={require("../../assests/images/chuyen-tien-than/long-hieu-chim-ov.jpg")}
                    style={{
                        maxWidth: "50vw",
                        margin: "30px auto",
                        display: "block"
                    }}
                />

                <Typography variant="h5" mt={3}>
                    Thuở xưa, tại núi Tuyết Sơn, có một con chim Oanh Vũ, cha mẹ nó đều mù. Hằng ngày bay đi tìm trái cây thơm ngon đem về cho cha mẹ dùng. Vào lúc đó, có một vị điền chủ vừa mới cấy lúa trên thửa ruộng của mình và phát tâm: “Lúa tôi cấy đây xin nguyện để cho chúng sanh ăn dùng”. Chim Oanh Vũ nghe vị điền chủ phát tâm như vậy nên hằng ngày bay đến đó đem lúa về nuôi dưỡng cha mẹ.
                </Typography>

                <Typography variant="h5" mt={3}>
                    Nhưng một hôm, vị điền chủ đi thăm ruộng thấy các loài chim rừng phá hoại lúa quá mức. Ông ta tức giận, bèn đặt lưới thì lại tình cờ bắt được chim Oanh Vũ. Chim Oanh Vũ lễ phép thưa: “Trước đây ông có lòng tốt bố thí, tôi mới đến lấy lúa, nay vì sao ông lại đặt lưới bắt tôi?”. Ông điền chủ hỏi: “Người đến lấy lúa để làm gì?”. Chim Oanh Vũ thật thà đáp: “ Thưa ông, cha mẹ già và bị mù nên tôi phải đi lấy lúa đem về cho cha mẹ ăn”.
                    Ông điền chủ nghe vậy lòng thương xót cảm động, nghĩ loài cầm thú cũng có lòng hiếu thảo không thua gì con người bèn bảo: “Từ nay về sau ngươi cứ đến lấy lúa đừng có e ngại gì cả”.
                </Typography>

                <Typography variant="h4" mt={3} sx={{ fontWeight: "600", color: "#555" }}>
                    Ý nghĩa câu chuyện:
                </Typography>
                <Typography variant="h5">
                    Chim Oanh Vũ trong truyện là tiền thân Đức Phật Thích Ca. Ông điền chủ là tiền thân Ngài Xá Lợi Phất. Sau này Ngài Xá Lợi Phất là đại đệ tử thông minh nhất của Đức Phật.
                </Typography>

                <Typography variant="h5" mt={3}>
                    <b>Lưu ý các em: </b>Dựa vào câu chuyện này mà ngành Đồng niên GĐPT từ năm 1951 được có thêm tên gọi là ngành Oanh Vũ.
                </Typography>
                <Typography variant="h5" mt={3}>
                    Do vậy các em phải áp dụng điều luật thứ 2 và hết lòng hiếu kính với cha mẹ vì hạnh hiếu là hạnh cao quý nhất.
                </Typography>
            </Box >
            <SidebarRight />
        </Container>
    )
}

export default LongHieuChimOanhVu;