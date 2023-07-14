import "../../css/add.luggage.css";
import Box from "@mui/material/Box";

const AddLuggage = () => {
  return (
    <div className="div_add_luggage">
      <div className="div_four">
        <div className="four"></div>
        <span className="span_four">4</span>
        <span className="span_extras">Extras</span>
      </div>

      <Box
        id="id_add_more_baggage"
        className="div_add_more_baggage"
        sx={{
          "&:hover": {
            backgroundColor: "#C211A1",
            opacity: "50%",
          },
        }}
      >
        <span className="span_add_more_baggage">Add more baggage</span>
        <span className="span_from">from €2.50 </span>
        <div className="div_add_image"></div>
        <div id="id_arrow_right_image" className="div_arrow_right_image"></div>
      </Box>

      <div className="div_included_luggage">
        <div className="div_image"></div>
        <div className="div_image_briefcase"></div>
        <span className="include_per_person">Included per person</span>
        <span className="span_7kg">1 hand luggage | 7kg . 42*30*18cm</span>
        <span className="span_20kg">1 luggage | 20kg . 80*50*30cm</span>
      </div>
    </div>
  );
};
export default AddLuggage;
