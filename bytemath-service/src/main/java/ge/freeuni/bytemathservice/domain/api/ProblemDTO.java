package ge.freeuni.bytemathservice.domain.api;

import ge.freeuni.bytemathservice.domain.enums.ProblemDifficulty;
import lombok.Builder;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProblemDTO {
    private String id;
    private String title;
    private String description;
    private String task;
    private String inputFormat;
    private String outputFormat;
    private String example;
    private String note;
    private String pythonTemplate;
    private String javaTemplate;
    private List<TestCaseDTO> testCases;
    private LockedLinesDTO lockedLines;
    private ProblemDifficulty difficulty;
    private Boolean isCompleted;
}
