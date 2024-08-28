package ge.freeuni.bytemathservice.domain.enums;

import lombok.Getter;

@Getter
public enum ProblemDifficulty {
    EASY("Easy"),
    MEDIUM("Medium"),
    HARD("Hard");

    private final String displayName;

    ProblemDifficulty(String displayName) {
        this.displayName = displayName;
    }
}
