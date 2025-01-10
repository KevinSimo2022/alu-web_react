// Interface to represent major credits with a unique branding mechanism
export interface MajorCredits {
    credits: number;          // Number of credits for the major
    _majorCreditBrand: void;  // Unique branding property to distinguish major credits
}

// Interface to represent minor credits with a unique branding mechanism
export interface MinorCredits {
    credits: number;          // Number of credits for the minor
    _minorCreditBrand: void;  // Unique branding property to distinguish minor credits
}

// Function to sum two major credit subjects and return the result as a MajorCredits object
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
    return {
        credits: subject1.credits + subject2.credits  // Sum the credits of both subjects
    } as MajorCredits;  // Return the result as MajorCredits type
};

// Function to sum two minor credit subjects and return the result as a MinorCredits object
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits){
    return {
        credits: subject1.credits + subject2.credits  // Sum the credits of both subjects
    } as MinorCredits;  // Return the result as MinorCredits type
};
