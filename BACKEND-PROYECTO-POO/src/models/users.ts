export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    profileImage: string;
    subscription: number | undefined;
    dashboard: Dashboard[];
}

export interface Dashboard {
    projects: Project[];
    storage: Storage[];
    categories: Category[];
}

export interface Project {
    id: string;
    name: string;
    icon: string;
    isFavorite: boolean;
    isShared: boolean;
    isDeleted: boolean;
    isRecent: boolean;
    isSave: boolean;
    files: File[];
}

export interface File {
    name: string;
    content: string | null;
}

export interface Storage {
    limit: number | undefined;
    unit: string;
}

export interface Category {
    name: string;
    icon: string;
}
