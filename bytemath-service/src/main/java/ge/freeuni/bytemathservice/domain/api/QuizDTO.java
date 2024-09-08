package ge.freeuni.bytemathservice.domain.api;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class QuizDTO {

    private Long id;

    private String identifier;

    private String title;

    private List<QuestionDTO> questions;

}
