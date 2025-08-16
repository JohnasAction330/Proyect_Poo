import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    name: string;
    email: string;
    dashboard: mongoose.Types.DocumentArray<{
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }> & {
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }>;
    password?: string | null | undefined;
    phone?: string | null | undefined;
    profileImage?: string | null | undefined;
    subscription?: number | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    dashboard: mongoose.Types.DocumentArray<{
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }> & {
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }>;
    password?: string | null | undefined;
    phone?: string | null | undefined;
    profileImage?: string | null | undefined;
    subscription?: number | null | undefined;
}, {}, mongoose.DefaultSchemaOptions> & {
    name: string;
    email: string;
    dashboard: mongoose.Types.DocumentArray<{
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }> & {
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }>;
    password?: string | null | undefined;
    phone?: string | null | undefined;
    profileImage?: string | null | undefined;
    subscription?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    email: string;
    dashboard: mongoose.Types.DocumentArray<{
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }> & {
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }>;
    password?: string | null | undefined;
    phone?: string | null | undefined;
    profileImage?: string | null | undefined;
    subscription?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    email: string;
    dashboard: mongoose.Types.DocumentArray<{
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }> & {
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }>;
    password?: string | null | undefined;
    phone?: string | null | undefined;
    profileImage?: string | null | undefined;
    subscription?: number | null | undefined;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name: string;
    email: string;
    dashboard: mongoose.Types.DocumentArray<{
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }> & {
        projects: mongoose.Types.DocumentArray<{
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }> & {
            files: mongoose.Types.DocumentArray<{
                name?: string | null | undefined;
                content?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }> & {
                name?: string | null | undefined;
                content?: string | null | undefined;
            }>;
            shareWith: string[];
            id?: string | null | undefined;
            name?: string | null | undefined;
            icon?: string | null | undefined;
            isFavorite?: boolean | null | undefined;
            isShared?: boolean | null | undefined;
            isDeleted?: boolean | null | undefined;
            isRecent?: boolean | null | undefined;
            isSave?: boolean | null | undefined;
        }>;
        storage: mongoose.Types.DocumentArray<{
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }> & {
            limit?: number | null | undefined;
            unit?: string | null | undefined;
        }>;
        categories: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }> & {
            name?: string | null | undefined;
            icon?: string | null | undefined;
        }>;
    }>;
    password?: string | null | undefined;
    phone?: string | null | undefined;
    profileImage?: string | null | undefined;
    subscription?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=users.mongo.d.ts.map