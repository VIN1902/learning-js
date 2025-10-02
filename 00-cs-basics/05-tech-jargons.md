# Semantic Versioning
- Set of rules to version a software release.
- Format: MAJOR.MINOR.PATCH 
    - ex: v1.2.3
- Major: Increment when introducing couple of breaking changes (modifications that make previous versions incompatible).
- Minor: Increment when adding new features that are backward-compatible (existing functionality remains unchanged).
- Patch: Increment when making bug fixes or small improvements that do not introduce new features or breaking changes.

## Version Constraints (Range Specifiers) in Package Managers
- ^ (Caret): Allows updates within the same major version.
    - ex: ^4.21.2 allows 4.x.x < 5.0.0
- ~ (Tilde) → Allows updates within the same minor version.
    - ex: ~4.21.2 allows 4.21.x < 4.22.0