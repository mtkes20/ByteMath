package ge.freeuni.bytemathservice.mapper;

import ge.freeuni.bytemathservice.domain.api.LockedLinesDTO;
import ge.freeuni.bytemathservice.domain.api.ProblemDTO;
import ge.freeuni.bytemathservice.domain.api.TestCaseDTO;
import ge.freeuni.bytemathservice.domain.entity.Problem;
import ge.freeuni.bytemathservice.domain.entity.TestCase;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProblemMapper {

    public ProblemDTO toDTO(Problem entity) {
        if (entity == null) {
            return null;
        }
        return ProblemDTO.builder()
                .id(entity.getId().toString())
                .title(entity.getTitle())
                .description(entity.getDescription())
                .task(entity.getTask())
                .inputFormat(entity.getInputFormat())
                .outputFormat(entity.getOutputFormat())
                .example(entity.getExample())
                .note(entity.getNote())
                .pythonTemplate(entity.getPythonTemplate())
                .javaTemplate(entity.getJavaTemplate())
                .testCases(testCasesToDTOs(entity.getTestCases()))
                .lockedLines(lockedLinesToDTO(entity.getLockedLines()))
                .difficulty(entity.getDifficulty())
                .build();
    }


    public TestCaseDTO testCaseToDTO(TestCase entity) {
        if (entity == null) {
            return null;
        }
        return TestCaseDTO.builder()
                .input(entity.getInput())
                .expectedOutput(entity.getExpectedOutput())
                .build();
    }

    private List<TestCaseDTO> testCasesToDTOs(List<TestCase> testCases) {
        return testCases.stream()
                .map(this::testCaseToDTO)
                .collect(Collectors.toList());
    }


    private LockedLinesDTO lockedLinesToDTO(Problem.LockedLines lockedLines) {
        if (lockedLines == null) {
            return null;
        }
        return new LockedLinesDTO(lockedLines.getPython(), lockedLines.getJava());
    }
}
