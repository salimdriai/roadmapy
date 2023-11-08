import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const StyledForm = styled("form")(() => ({}));
const StyledTextField = styled(TextField)`
  textarea {
    resize: both;
    min-height: 48px;
  }
`;

export const TextArea = (props: any) => {
  return (
    <StyledForm noValidate autoComplete="off">
      <div>
        <StyledTextField {...props} fullWidth multiline />
      </div>
    </StyledForm>
  );
};
