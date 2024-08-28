package ge.freeuni.bytemathservice.domain.api;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TestCaseDTO {

    private String input;
    private String expectedOutput;
}
