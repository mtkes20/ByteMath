package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.ProblemDTO;
import ge.freeuni.bytemathservice.domain.api.ProblemSummaryDTO;
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

    public List<ProblemSummaryDTO> getProblemsByCourse(String identifier, String language) {
        return problemRepository.findProblemSummariesByCourseId(identifier, language);
    }

    public ProblemDTO getProblemById(Long id, String language) {
        Problem entity = problemRepository.findById(id).orElseThrow(RuntimeException::new);
        return problemMapper.toDTO(entity, language);
    }
}
