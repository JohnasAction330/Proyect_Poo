import { Request, Response } from "express";
export declare const getUsers: (req: Request, res: Response) => Promise<void>;
export declare const deleteUser: (req: Request, res: Response) => Promise<void>;
export declare const getUserWithoutDashboard: (req: Request, res: Response) => Promise<void>;
export declare const getUsersPerId: (req: Request, res: Response) => Promise<void>;
export declare const getUserPlan: (req: Request, res: Response) => Promise<void>;
export declare const getUserCategories: (req: Request, res: Response) => Promise<void>;
export declare const getProjectById: (req: Request, res: Response) => Promise<void>;
export declare const getProjectsByUserID: (req: Request, res: Response) => Promise<void>;
export declare const updateProject: (req: Request, res: Response) => Promise<void>;
export declare const getDeletedProjects: (req: Request, res: Response) => Promise<void>;
export declare const deleteProjectFromUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteProjectFromBin: (req: Request, res: Response) => Promise<void>;
export declare const createProject: (req: Request, res: Response) => Promise<void>;
export declare const restoreProject: (req: Request, res: Response) => Promise<void>;
export declare const updateUserPlan: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=users.controller.d.ts.map