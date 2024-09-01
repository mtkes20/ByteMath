package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.ProblemDTO;
import ge.freeuni.bytemathservice.domain.api.ProblemSummaryDTO;
import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.domain.entity.Problem;
import ge.freeuni.bytemathservice.mapper.ProblemMapper;
import ge.freeuni.bytemathservice.repository.ProblemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProblemService {

    private final ProblemRepository problemRepository;

    private final ProblemMapper problemMapper;

    private final UserProblemCompletionService userProblemCompletionService;

    public List<ProblemSummaryDTO> getProblemsByCourse(String identifier, String language) {
        return problemRepository.findProblemSummariesByCourseId(identifier, language);
    }

    public ProblemDTO getProblemById(BytemathUser currentUser, Long id, String language) {
        Problem entity = problemRepository.findById(id).orElseThrow(RuntimeException::new);
        ProblemDTO dto = problemMapper.toDTO(entity, language);
        dto.setIsCompleted(userProblemCompletionService.isProblemCompleted(currentUser, id));
        return dto;
    }
}
