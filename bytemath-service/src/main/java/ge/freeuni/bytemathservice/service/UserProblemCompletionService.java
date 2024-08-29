package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.ProblemCompletionStatsDTO;
import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import ge.freeuni.bytemathservice.domain.entity.Problem;
import ge.freeuni.bytemathservice.domain.entity.UserProblemCompletion;
import ge.freeuni.bytemathservice.repository.ProblemRepository;
import ge.freeuni.bytemathservice.repository.UserProblemCompletionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserProblemCompletionService {

    private final UserProblemCompletionRepository userProblemCompletionRepository;
    private final ProblemRepository problemRepository;

    @Autowired
    public UserProblemCompletionService(UserProblemCompletionRepository userProblemCompletionRepository, ProblemRepository problemRepository) {
        this.userProblemCompletionRepository = userProblemCompletionRepository;
        this.problemRepository = problemRepository;
    }

    @Transactional
    public void markProblemAsCompleted(BytemathUser user, Long problemId) {
        Problem problem = problemRepository.findById(problemId)
                .orElseThrow(() -> new RuntimeException("Problem not found"));
        Optional<UserProblemCompletion> alreadyCompleted = userProblemCompletionRepository.findByUserAndProblem(user, problem);
        if (alreadyCompleted.isPresent()) {
            return;
        }
        UserProblemCompletion completion = new UserProblemCompletion();
        completion.setUser(user);
        completion.setProblem(problem);
        completion.setCompletedAt(java.time.LocalDateTime.now());
        userProblemCompletionRepository.save(completion);
    }

    public ProblemCompletionStatsDTO getProblemCompletionStats(BytemathUser user) {
        List<UserProblemCompletion> completions = userProblemCompletionRepository.findByUser(user);
        ProblemCompletionStatsDTO stats = new ProblemCompletionStatsDTO();
        for (UserProblemCompletion completion : completions) {
            Problem problem = completion.getProblem();
            switch (problem.getDifficulty()) {
                case EASY:
                    stats.setEasyCompleted(stats.getEasyCompleted() + 1);
                    break;
                case MEDIUM:
                    stats.setMediumCompleted(stats.getMediumCompleted() + 1);
                    break;
                case HARD:
                    stats.setHardCompleted(stats.getHardCompleted() + 1);
                    break;
            }
        }
        return stats;
    }
}
