package ge.freeuni.bytemathservice.domain.api;

import ge.freeuni.bytemathservice.domain.enums.ProblemDifficulty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProblemSummaryDTO {
    private Long id;
    private String title;
    private ProblemDifficulty difficulty;
}
