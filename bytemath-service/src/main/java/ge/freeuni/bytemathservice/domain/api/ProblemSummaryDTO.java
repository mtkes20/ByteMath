package ge.freeuni.bytemathservice.domain.api;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProblemSummaryDTO {
    private Long id;
    private String title;
}
