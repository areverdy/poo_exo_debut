export class Archer {
    private _posedepiege: string;
    public get posedepiege(): string {
        return this._posedepiege;
    }
    public set posedepiege(value: string) {
        this._posedepiege = value;
    }
    constructor(
        posedepiege: string,
    ) {
        this._posedepiege = posedepiege
    }
}