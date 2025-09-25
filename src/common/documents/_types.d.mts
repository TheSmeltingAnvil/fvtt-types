export type ActiveEffectData = {
    /**
     * The _id which uniquely identifies the ActiveEffect within a parent Actor or
     * Item
     */
    _id: string | null;
    /**
     * The name which describes the ActiveEffect
     */
    name: string;
    /**
     * The document type
     */
    type?: string | undefined;
    /**
     * The system type data field
     */
    system?: object | undefined;
    /**
     * The sort value
     */
    sort?: number | undefined;
    /**
     * The array of EffectChangeData objects which the ActiveEffect applies
     */
    changes: EffectChangeData[];
    /**
     * Is this ActiveEffect currently disabled?
     */
    disabled?: boolean | undefined;
    /**
     * An EffectDurationData object which describes the duration of the
     *  ActiveEffect
     */
    duration?: EffectDurationData | undefined;
    /**
     * The HTML text description for this ActiveEffect document.
     */
    description?: string | undefined;
    /**
     * An icon image path used to depict the ActiveEffect
     */
    icon?: string | undefined;
    /**
     * A UUID reference to the document from which this ActiveEffect originated
     */
    origin?: string | undefined;
    /**
     * A color string which applies a tint to the ActiveEffect icon
     */
    tint?: string | undefined;
    /**
     * Does this ActiveEffect automatically transfer from an Item to an Actor?
     */
    transfer?: boolean | undefined;
    /**
     * Special status IDs that pertain to this effect
     */
    statuses?: Set<string> | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
};
export type EffectDurationData = {
    /**
     * The world time when the active effect first started
     */
    startTime?: number | undefined;
    /**
     * The maximum duration of the effect, in seconds
     */
    seconds?: number | undefined;
    /**
     * The _id of the CombatEncounter in which the effect first started
     */
    combat?: string | undefined;
    /**
     * The maximum duration of the effect, in combat rounds
     */
    rounds?: number | undefined;
    /**
     * The maximum duration of the effect, in combat turns
     */
    turns?: number | undefined;
    /**
     * The round of the CombatEncounter in which the effect first started
     */
    startRound?: number | undefined;
    /**
     * The turn of the CombatEncounter in which the effect first started
     */
    startTurn?: number | undefined;
};
export type EffectChangeData = {
    /**
     * The attribute path in the Actor or Item data which the change modifies
     */
    key: string;
    /**
     * The value of the change effect
     */
    value: string;
    /**
     * The modification mode with which the change is applied
     */
    mode: number;
    /**
     * The priority level with which this change is applied
     */
    priority: number;
};
export type ActorData = {
    /**
     * The _id which uniquely identifies this Actor document
     */
    _id: string | null;
    /**
     * The name of this Actor
     */
    name: string;
    /**
     * An Actor subtype which configures the system data model applied
     */
    type: string;
    /**
     * An image file path which provides the artwork for this Actor
     */
    img?: string | undefined;
    /**
     * Data for an Actor subtype, defined by a System or Module
     */
    system: object;
    /**
     * Default Token settings which are used for Tokens created from
     * this Actor
     */
    prototypeToken: PrototypeTokenData;
    /**
     * A Collection of Item embedded Documents
     */
    items: ItemData[];
    /**
     * A Collection of ActiveEffect embedded Documents
     */
    effects: ActiveEffectData[];
    /**
     * The _id of a Folder which contains this Actor
     */
    folder: string | null;
    /**
     * The numeric sort value which orders this Actor relative to its siblings
     */
    sort: number;
    /**
     * An object which configures ownership of this Actor
     */
    ownership: object;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type ActorDeltaData = {
    /**
     * The _id which uniquely identifies this ActorDelta document
     */
    _id: string | null;
    /**
     * The name override, if any.
     */
    name?: string | undefined;
    /**
     * The type override, if any.
     */
    type?: string | undefined;
    /**
     * The image override, if any.
     */
    img?: string | undefined;
    /**
     * The system data model override.
     */
    system?: object | undefined;
    /**
     * An array of embedded item data overrides.
     */
    items?: ItemData[] | undefined;
    /**
     * An array of embedded active effect data overrides.
     */
    effects?: ActiveEffectData[] | undefined;
    /**
     * Ownership overrides.
     */
    ownership?: object | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
};
export type AdventureData = {
    /**
     * The _id which uniquely identifies this Adventure document
     */
    _id: string | null;
    /**
     * The human-readable name of the Adventure
     */
    name: string;
    /**
     * The file path for the primary image of the adventure
     */
    img: string;
    /**
     * A string caption displayed under the primary image banner
     */
    caption: string;
    /**
     * An HTML text description for the adventure
     */
    description: string;
    /**
     * An array of included Actor documents
     */
    actors: ActorData[];
    /**
     * An array of included Combat documents
     */
    combats: CombatData[];
    /**
     * An array of included Item documents
     */
    items: ItemData[];
    /**
     * An array of included Scene documents
     */
    scenes: SceneData[];
    /**
     * An array of included JournalEntry documents
     */
    journal: JournalEntryData[];
    /**
     * An array of included RollTable documents
     */
    tables: RollTableData[];
    /**
     * An array of included Macro documents
     */
    macros: MacroData[];
    /**
     * An array of included Cards documents
     */
    cards: CardsData[];
    /**
     * An array of included Playlist documents
     */
    playlists: PlaylistData[];
    /**
     * An array of included Folder documents
     */
    folders: FolderData[];
    /**
     * The sort order of this adventure relative to its siblings
     */
    sort: number;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type AmbientLightData = {
    /**
     * The _id which uniquely identifies this AmbientLight document
     */
    _id: string | null;
    /**
     * The x-coordinate position of the origin of the light
     */
    x: number;
    /**
     * The y-coordinate position of the origin of the light
     */
    y: number;
    /**
     * The elevation
     */
    elevation?: number | undefined;
    /**
     * The angle of rotation for the tile between 0 and 360
     */
    rotation?: number | undefined;
    /**
     * Whether or not this light source is constrained by Walls
     */
    walls?: boolean | undefined;
    /**
     * Whether or not this light source provides a source of vision
     */
    vision?: boolean | undefined;
    /**
     * Light configuration data
     */
    config: LightData;
    /**
     * Is the light source currently hidden?
     */
    hidden?: boolean | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
};
export type AmbientSoundData = {
    /**
     * The _id which uniquely identifies this AmbientSound document
     */
    _id: string | null;
    /**
     * The x-coordinate position of the origin of the sound.
     */
    x: number;
    /**
     * The y-coordinate position of the origin of the sound.
     */
    y: number;
    /**
     * The radius of the emitted sound.
     */
    radius: number;
    /**
     * The audio file path that is played by this sound
     */
    path: string;
    /**
     * Does this sound loop?
     */
    repeat?: boolean | undefined;
    /**
     * The audio volume of the sound, from 0 to 1
     */
    volume?: number | undefined;
    /**
     * Whether or not this sound source is constrained by Walls. True by default.
     */
    walls: boolean;
    /**
     * Whether to adjust the volume of the sound heard by the listener based on how
     * close the listener is to the center of the sound source. True by default.
     */
    easing: boolean;
    /**
     * Is the sound source currently hidden? False by default.
     */
    hidden: boolean;
    /**
     * A darkness range (min and max) for which the source should be active
     */
    darkness: {
        min: number;
        max: number;
    };
    /**
     * Special effects to apply to the sound
     */
    effects: {
        base: AmbientSoundEffect;
        muffled: AmbientSoundEffect;
    };
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * The elevation
     */
    elevation?: number | undefined;
};
export type AmbientSoundEffect = {
    /**
     * The type of effect in CONFIG.soundEffects
     */
    type: string;
    /**
     * The intensity of the effect on the scale of [1, 10]
     */
    intensity: number;
};
export type CardData = {
    /**
     * The _id which uniquely identifies this Card document
     */
    _id: string | null;
    /**
     * The text name of this card
     */
    name: string;
    /**
     * A text description of this card which applies to all faces
     */
    description: string;
    /**
     * A category of card (for example, a suit) to which this card belongs
     */
    type: string;
    /**
     * Data for a Card subtype, defined by a System or Module
     */
    system: object;
    /**
     * An optional suit designation which is used by default sorting
     */
    suit: string;
    /**
     * An optional numeric value of the card which is used by default sorting
     */
    value: number | null;
    /**
     * An object of face data which describes the back of this card
     */
    back: CardFaceData;
    /**
     * An array of face data which represent displayable faces of this card
     */
    faces: CardFaceData[];
    /**
     * The index of the currently displayed face, or null if the card is face-down
     */
    face: number | null;
    /**
     * Whether this card is currently drawn from its source deck
     */
    drawn: boolean;
    /**
     * The document ID of the origin deck to which this card belongs
     */
    origin: string;
    /**
     * The visible width of this card
     */
    width: number;
    /**
     * The visible height of this card
     */
    height: number;
    /**
     * The angle of rotation of this card
     */
    rotation: number;
    /**
     * The sort order of this card relative to others in the same stack
     */
    sort: number;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
};
export type CardFaceData = {
    /**
     * A name for this card face
     */
    name?: string | undefined;
    /**
     * Displayed text that belongs to this face
     */
    text?: string | undefined;
    /**
     * A displayed image or video file which depicts the face
     */
    img?: string | undefined;
};
export type CardsData = {
    /**
     * The _id which uniquely identifies this stack of Cards document
     */
    _id: string | null;
    /**
     * The text name of this stack
     */
    name: string;
    /**
     * The type of this stack, in BaseCards.metadata.types
     */
    type: string;
    /**
     * Data for a Cards subtype, defined by a System or Module
     */
    system: object;
    /**
     * A text description of this stack
     */
    description: string;
    /**
     * An image or video which is used to represent the stack of cards
     */
    img: string | null;
    /**
     * A collection of Card documents which currently belong to this stack
     */
    cards: CardData[];
    /**
     * The visible width of this stack
     */
    width: number;
    /**
     * The visible height of this stack
     */
    height: number;
    /**
     * The angle of rotation of this stack
     */
    rotation: number;
    /**
     * Whether or not to publicly display the number of cards in this stack
     */
    displayCount: boolean;
    /**
     * The _id of a Folder which contains this document
     */
    folder: string | null;
    /**
     * The sort order of this stack relative to others in its parent collection
     */
    sort: number;
    /**
     * An object which configures ownership of this Cards
     */
    ownership: object;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type ChatMessageData = {
    /**
     * The _id which uniquely identifies this ChatMessage document
     */
    _id: string | null;
    /**
     * The type of this chat message, in BaseChatMessage.metadata.types
     */
    type: string;
    /**
     * Data for a ChatMessage subtype, defined by a System or Module
     */
    system: object;
    /**
     * The message style from {@link CONST.CHAT_MESSAGE_STYLES}
     */
    style?: ChatMessageStyle | undefined;
    /**
     * The _id of the User document who generated this message
     */
    user: string;
    /**
     * The timestamp at which point this message was generated
     */
    timestamp: number;
    /**
     * An optional flavor text message which summarizes this message
     */
    flavor?: string | undefined;
    /**
     * An optional title used if the message is popped-out
     */
    title?: string | undefined;
    /**
     * The HTML content of this chat message
     */
    content: string;
    /**
     * A ChatSpeakerData object which describes the origin of the ChatMessage
     */
    speaker: ChatSpeakerData;
    /**
     * An array of User _id values to whom this message is privately whispered
     */
    whisper: string[];
    /**
     * Is this message sent blindly where the creating User cannot see it?
     */
    blind?: boolean | undefined;
    /**
     * Serialized content of any Roll instances attached to the ChatMessage
     */
    rolls?: string[] | undefined;
    /**
     * The URL of an audio file which plays when this message is received
     */
    sound?: string | undefined;
    /**
     * Is this message styled as an emote?
     */
    emote?: boolean | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type ChatSpeakerData = {
    /**
     * The _id of the Scene where this message was created
     */
    scene?: string | undefined;
    /**
     * The _id of the Actor who generated this message
     */
    actor?: string | undefined;
    /**
     * The _id of the Token who generated this message
     */
    token?: string | undefined;
    /**
     * An overridden alias name used instead of the Actor or Token name
     */
    alias?: string | undefined;
};
export type CombatData = {
    /**
     * The _id which uniquely identifies this Combat document
     */
    _id: string | null;
    /**
     * The type of this Combat.
     */
    type: string;
    /**
     * Game system data which is defined by system data models.
     */
    system?: object | undefined;
    /**
     * The _id of a Scene within which this Combat occurs
     */
    scene: string;
    /**
     * A Collection of Combatant embedded Documents
     */
    combatants: CombatantData[];
    /**
     * A Collection of Documents that represent a grouping of individual
     *           Combatants.
     */
    groups: CombatantGroupData[];
    /**
     * Is the Combat encounter currently active?
     */
    active?: boolean | undefined;
    /**
     * The current round of the Combat encounter
     */
    round?: number | undefined;
    /**
     * The current turn in the Combat round
     */
    turn?: number | null | undefined;
    /**
     * The current sort order of this Combat relative to others in the same Scene
     */
    sort?: number | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type CombatantData = {
    /**
     * The _id which uniquely identifies this Combatant embedded document
     */
    _id: string | null;
    /**
     * The type of this Combatant.
     */
    type: string;
    /**
     * Game system data which is defined by system data models.
     */
    system?: object | undefined;
    /**
     * The _id of an Actor associated with this Combatant
     */
    actorId?: string | undefined;
    /**
     * The _id of a Token associated with this Combatant
     */
    tokenId?: string | undefined;
    /**
     * A customized name which replaces the name of the Token in the tracker
     */
    name?: string | undefined;
    /**
     * A customized image which replaces the Token image in the tracker
     */
    img?: string | undefined;
    /**
     * The initiative score for the Combatant which determines its turn order
     */
    initiative?: number | undefined;
    /**
     * Is this Combatant currently hidden?
     */
    hidden?: boolean | undefined;
    /**
     * Has this Combatant been defeated?
     */
    defeated?: boolean | undefined;
    /**
     * An optional group this Combatant belongs to.
     */
    group?: string | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information.
     */
    _stats: DocumentStats;
};
export type CombatantGroupData = {
    /**
     * The _id which uniquely identifies this CombatantGroup embedded document.
     */
    _id: string | null;
    /**
     * The type of this CombatantGroup.
     */
    type: string;
    /**
     * Game system data which is defined by system data models.
     */
    system?: object | undefined;
    /**
     * A customized name which replaces the inferred group name.
     */
    name?: string | undefined;
    /**
     * A customized image which replaces the inferred group image.
     */
    img?: string | undefined;
    /**
     * The initiative value that will be used for all group members.
     */
    initiative?: number | undefined;
    /**
     * An object which configures ownership of this group.
     */
    ownership?: object | undefined;
    /**
     * An object of optional key/value flags.
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information.
     */
    _stats: DocumentStats;
};
export type DrawingData = {
    /**
     * The _id which uniquely identifies this BaseDrawing embedded document
     */
    _id: string | null;
    /**
     * The _id of the user who created the drawing
     */
    author: string;
    /**
     * The geometric shape of the drawing
     */
    shape: ShapeData;
    /**
     * The x-coordinate position of the top-left corner of the drawn shape
     */
    x: number;
    /**
     * The y-coordinate position of the top-left corner of the drawn shape
     */
    y: number;
    /**
     * The elevation of the drawing
     */
    elevation?: number | undefined;
    /**
     * The z-index of this drawing relative to other siblings
     */
    sort?: number | undefined;
    /**
     * The angle of rotation for the drawing figure
     */
    rotation?: number | undefined;
    /**
     * An amount of bezier smoothing applied, between 0 and 1
     */
    bezierFactor?: number | undefined;
    /**
     * The fill type of the drawing shape, a value from CONST.DRAWING_FILL_TYPES
     */
    fillType?: number | undefined;
    /**
     * An optional color string with which to fill the drawing geometry
     */
    fillColor?: string | undefined;
    /**
     * The opacity of the fill applied to the drawing geometry
     */
    fillAlpha?: number | undefined;
    /**
     * The width in pixels of the boundary lines of the drawing geometry
     */
    strokeWidth?: number | undefined;
    /**
     * The color of the boundary lines of the drawing geometry
     */
    strokeColor?: number | undefined;
    /**
     * The opacity of the boundary lines of the drawing geometry
     */
    strokeAlpha?: number | undefined;
    /**
     * The path to a tiling image texture used to fill the drawing geometry
     */
    texture?: string | undefined;
    /**
     * Optional text which is displayed overtop of the drawing
     */
    text?: string | undefined;
    /**
     * The font family used to display text within this drawing, defaults to
     *         CONFIG.defaultFontFamily
     */
    fontFamily?: string | undefined;
    /**
     * The font size used to display text within this drawing
     */
    fontSize?: number | undefined;
    /**
     * The color of text displayed within this drawing
     */
    textColor?: string | undefined;
    /**
     * The opacity of text displayed within this drawing
     */
    textAlpha?: number | undefined;
    /**
     * Is the drawing currently hidden?
     */
    hidden?: boolean | undefined;
    /**
     * Is the drawing currently locked?
     */
    locked?: boolean | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
};
export type FogExplorationData = {
    /**
     * The _id which uniquely identifies this FogExploration document
     */
    _id: string | null;
    /**
     * The _id of the Scene document to which this fog applies
     */
    scene: string;
    /**
     * The _id of the User document to which this fog applies
     */
    user: string;
    /**
     * The base64 image/jpeg of the explored fog polygon
     */
    explored: string;
    /**
     * The object of scene positions which have been explored at a certain vision
     * radius
     */
    positions: object;
    /**
     * The timestamp at which this fog exploration was last updated
     */
    timestamp: number;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
};
export type FolderData = {
    /**
     * The _id which uniquely identifies this Folder document
     */
    _id: string | null;
    /**
     * The name of this Folder
     */
    name: string;
    /**
     * The document type which this Folder contains, from CONST.FOLDER_DOCUMENT_TYPES
     */
    type: string;
    /**
     * An HTML description of the contents of this folder
     */
    description: string;
    /**
     * The _id of a parent Folder which contains this Folder
     */
    folder?: string | null | undefined;
    /**
     * The sorting mode used to organize documents within this Folder, in ["a", "m"]
     */
    sorting?: string | undefined;
    /**
     * The numeric sort value which orders this Folder relative to its siblings
     */
    sort?: number | undefined;
    /**
     * A color string used for the background color of this Folder
     */
    color?: string | null | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type ItemData = {
    /**
     * The _id which uniquely identifies this Item document
     */
    _id: string | null;
    /**
     * The name of this Item
     */
    name: string;
    /**
     * An Item subtype which configures the system data model applied
     */
    type: string;
    /**
     * An image file path which provides the artwork for this Item
     */
    img?: string | undefined;
    /**
     * Data for an Item subtype, defined by a System or Module
     */
    system: object;
    /**
     * A collection of ActiveEffect embedded Documents
     */
    effects: ActiveEffectData[];
    /**
     * The _id of a Folder which contains this Item
     */
    folder: string | null;
    /**
     * The numeric sort value which orders this Item relative to its siblings
     */
    sort?: number | undefined;
    /**
     * An object which configures ownership of this Item
     */
    ownership?: object | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type JournalEntryData = {
    /**
     * The _id which uniquely identifies this JournalEntry document
     */
    _id: string | null;
    /**
     * The name of this JournalEntry
     */
    name: string;
    /**
     * The pages contained within this JournalEntry document
     */
    pages: JournalEntryPageData[];
    /**
     * The _id of a Folder which contains this JournalEntry
     */
    folder: string | null;
    /**
     * The categories contained within this JournalEntry.
     */
    categories: JournalEntryCategoryData[];
    /**
     * The numeric sort value which orders this JournalEntry
     *                                 relative to its siblings
     */
    sort?: number | undefined;
    /**
     * An object which configures ownership of this JournalEntry
     */
    ownership?: object | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type JournalEntryCategoryData = {
    /**
     * The _id which uniquely identifies this JournalEntryCategory document.
     */
    _id: string | null;
    /**
     * The name of this JournalEntryCategory.
     */
    name: string;
    /**
     * The numeric sort value which orders this category relative to other categories.
     */
    sort?: number | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information.
     */
    _stats: DocumentStats;
};
export type JournalEntryPageImageData = {
    /**
     * A caption for the image.
     */
    caption?: string | undefined;
};
export type JournalEntryPageTextData = {
    /**
     * The content of the JournalEntryPage in a format appropriate for its type.
     */
    content?: string | undefined;
    /**
     * The original markdown source, if applicable.
     */
    markdown?: string | undefined;
    /**
     * The format of the page's content, in CONST.JOURNAL_ENTRY_PAGE_FORMATS.
     */
    format: number;
};
export type JournalEntryPageVideoData = {
    /**
     * Show player controls for this video?
     */
    controls: boolean;
    /**
     * Automatically loop the video?
     */
    loop: boolean;
    /**
     * Should the video play automatically?
     */
    autoplay: boolean;
    /**
     * The volume level of any audio that the video file contains.
     */
    volume: number;
    /**
     * The starting point of the video, in seconds.
     */
    timestamp: number;
    /**
     * The width of the video, otherwise it will fill the available container width.
     */
    width: number;
    /**
     * The height of the video, otherwise it will use the aspect ratio of the source
     * video, or 16:9 if that aspect ratio is not available.
     */
    height: number;
};
export type JournalEntryPageTitleData = {
    /**
     * Whether to render the page's title in the overall journal view.
     */
    show: boolean;
    /**
     * The heading level to render this page's title at in the overall journal view.
     */
    level: number;
};
export type JournalEntryPageData = {
    /**
     * The _id which uniquely identifies this JournalEntryPage embedded document.
     */
    _id: string | null;
    /**
     * The text name of this page.
     */
    name: string;
    /**
     * The type of this page.
     */
    type: string;
    /**
     * Data that control's the display of this page's title.
     */
    title: JournalEntryPageTitleData;
    /**
     * Data particular to image journal entry pages.
     */
    image: JournalEntryPageImageData;
    /**
     * Data particular to text journal entry pages.
     */
    text: JournalEntryPageTextData;
    /**
     * Data particular to video journal entry pages.
     */
    video: JournalEntryPageVideoData;
    /**
     * The URI of the image or other external media to be used for this page.
     */
    src?: string | undefined;
    /**
     * System-specific data.
     */
    system: object;
    /**
     * An optional category that this page belongs to.
     */
    category?: string | undefined;
    /**
     * The numeric sort value which orders this page relative to its siblings.
     */
    sort: number;
    /**
     * An object which configures the ownership of this page.
     */
    ownership?: object | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type MacroData = {
    /**
     * The _id which uniquely identifies this Macro document
     */
    _id: string | null;
    /**
     * The name of this Macro
     */
    name: string;
    /**
     * A Macro subtype from CONST.MACRO_TYPES
     */
    type: string;
    /**
     * The _id of a User document which created this Macro *
     */
    author: string;
    /**
     * An image file path which provides the thumbnail artwork for this Macro
     */
    img?: string | undefined;
    /**
     * The scope of this Macro application from CONST.MACRO_SCOPES
     */
    scope?: string | undefined;
    /**
     * The string content of the macro command
     */
    command: string;
    /**
     * The _id of a Folder which contains this Macro
     */
    folder: string | null;
    /**
     * The numeric sort value which orders this Macro relative to its siblings
     */
    sort?: number | undefined;
    /**
     * An object which configures ownership of this Macro
     */
    ownership?: object | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type MeasuredTemplateData = {
    /**
     * The _id which uniquely identifies this BaseMeasuredTemplate embedded document
     */
    _id: string | null;
    /**
     * The _id of the user who created this measured template
     */
    author: string;
    /**
     * The value in CONST.MEASURED_TEMPLATE_TYPES which defines the geometry type of
     *           this template
     */
    t?: string | undefined;
    /**
     * The x-coordinate position of the origin of the template effect
     */
    x?: number | undefined;
    /**
     * The y-coordinate position of the origin of the template effect
     */
    y?: number | undefined;
    /**
     * The distance of the template effect
     */
    distance?: number | undefined;
    /**
     * The angle of rotation for the measured template
     */
    direction?: number | undefined;
    /**
     * The angle of effect of the measured template, applies to cone types
     */
    angle?: number | undefined;
    /**
     * The width of the measured template, applies to ray types
     */
    width?: number | undefined;
    /**
     * A color string used to tint the border of the template shape
     */
    borderColor?: string | undefined;
    /**
     * A color string used to tint the fill of the template shape
     */
    fillColor?: string | undefined;
    /**
     * A repeatable tiling texture used to add a texture fill to the template shape
     */
    texture?: string | undefined;
    /**
     * Is the template currently hidden?
     */
    hidden?: boolean | undefined;
    /**
     * The elevation
     */
    elevation?: number | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
};
export type NoteData = {
    /**
     * The _id which uniquely identifies this BaseNote embedded document
     */
    _id: string | null;
    /**
     * The _id of a JournalEntry document which this Note represents
     */
    entryId?: string | null | undefined;
    /**
     * The _id of a specific JournalEntryPage document which this Note represents
     */
    pageId?: string | null | undefined;
    /**
     * The x-coordinate position of the center of the note icon
     */
    x?: number | undefined;
    /**
     * The y-coordinate position of the center of the note icon
     */
    y?: number | undefined;
    /**
     * An image icon used to represent this note
     */
    texture?: TextureData | undefined;
    /**
     * The pixel size of the map note icon
     */
    iconSize?: number | undefined;
    /**
     * Optional text which overrides the title of the linked Journal Entry
     */
    text?: string | undefined;
    /**
     * The font family used to display the text label on this note, defaults to
     *         CONFIG.defaultFontFamily
     */
    fontFamily?: string | undefined;
    /**
     * The font size used to display the text label on this note
     */
    fontSize?: number | undefined;
    /**
     * A value in CONST.TEXT_ANCHOR_POINTS which defines where the text label anchors
     *       to the note icon.
     */
    textAnchor?: number | undefined;
    /**
     * The string that defines the color with which the note text is rendered
     */
    textColor?: string | undefined;
    /**
     * Whether this map pin is globally visible or requires LoS to see.
     */
    global?: boolean | undefined;
    /**
     * The elevation
     */
    elevation?: number | undefined;
    /**
     * The sort order
     */
    sort?: number | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
};
export type PlaylistData = {
    /**
     * The _id which uniquely identifies this Playlist document
     */
    _id: string | null;
    /**
     * The name of this playlist
     */
    name: string;
    /**
     * The description of this playlist
     */
    description: string;
    /**
     * A Collection of PlaylistSounds embedded documents which belong to
     *           this playlist
     */
    sounds: PlaylistSoundData[];
    /**
     * The playback mode for sounds in this playlist
     */
    mode?: number | undefined;
    /**
     * A channel in CONST.AUDIO_CHANNELS where all sounds in this playlist are played
     */
    channel: string;
    /**
     * Is this playlist currently playing?
     */
    playing?: boolean | undefined;
    /**
     * A duration in milliseconds to fade volume transition
     */
    fade?: number | undefined;
    /**
     * The _id of a Folder which contains this playlist
     */
    folder: string | null;
    /**
     * The sorting mode used for this playlist.
     */
    sorting: string;
    /**
     * The numeric sort value which orders this playlist relative to its siblings
     */
    sort?: number | undefined;
    /**
     * A seed used for playlist randomization to guarantee that all clients generate
     *               the same random order.
     */
    seed?: number | undefined;
    /**
     * An object which configures ownership of this Playlist
     */
    ownership?: object | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type PlaylistSoundData = {
    /**
     * The _id which uniquely identifies this PlaylistSound document
     */
    _id: string | null;
    /**
     * The name of this sound
     */
    name: string;
    /**
     * The description of this sound
     */
    description: string;
    /**
     * The audio file path that is played by this sound
     */
    path: string;
    /**
     * A channel in CONST.AUDIO_CHANNELS where this sound is played
     */
    channel: string;
    /**
     * Is this sound currently playing?
     */
    playing?: boolean | undefined;
    /**
     * The time in seconds at which playback was paused
     */
    pausedTime?: number | undefined;
    /**
     * Does this sound loop?
     */
    repeat?: boolean | undefined;
    /**
     * The audio volume of the sound, from 0 to 1
     */
    volume?: number | undefined;
    /**
     * A duration in milliseconds to fade volume transition
     */
    fade?: number | undefined;
    /**
     * The sort order of the PlaylistSound relative to others in the same collection
     */
    sort?: number | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
};
export type RollTableData = {
    /**
     * The _id which uniquely identifies this RollTable document
     */
    _id: string | null;
    /**
     * The name of this RollTable
     */
    name: string;
    /**
     * An image file path which provides the thumbnail artwork for this RollTable
     */
    img?: string | undefined;
    /**
     * The HTML text description for this RollTable document
     */
    description?: string | undefined;
    /**
     * A Collection of TableResult embedded documents which belong to
     *            this RollTable
     */
    results?: TableResultData[] | undefined;
    /**
     * The Roll formula which determines the results chosen from the table
     */
    formula: string;
    /**
     * Are results from this table drawn with replacement?
     */
    replacement?: boolean | undefined;
    /**
     * Is the Roll result used to draw from this RollTable displayed in chat?
     */
    displayRoll?: boolean | undefined;
    /**
     * The _id of a Folder which contains this RollTable
     */
    folder: string | null;
    /**
     * The numeric sort value which orders this RollTable relative to its siblings
     */
    sort?: number | undefined;
    /**
     * An object which configures ownership of this RollTable
     */
    ownership?: object | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type SceneData = {
    /**
     * The _id which uniquely identifies this Scene document
     */
    _id: string | null;
    /**
     * The name of this scene
     */
    name: string;
    /**
     * Is this scene currently active? Only one scene may be active at a given time
     */
    active?: boolean | undefined;
    /**
     * Is this scene displayed in the top navigation bar?
     */
    navigation?: boolean | undefined;
    /**
     * The sorting order of this Scene in the navigation bar relative to siblings
     */
    navOrder?: number | undefined;
    /**
     * A string which overrides Scene name for display in the navigation bar
     */
    navName?: string | undefined;
    /**
     * An image or video file that provides the background texture for the scene.
     */
    background?: TextureData | null | undefined;
    /**
     * An image or video file path providing foreground media for the scene
     */
    foreground?: string | null | undefined;
    /**
     * The elevation of the foreground image
     */
    foregroundElevation?: number | undefined;
    /**
     * A thumbnail image which depicts the scene at lower resolution
     */
    thumb: string | null;
    /**
     * The width of the scene canvas, normally the width of the background media
     */
    width?: number | undefined;
    /**
     * The height of the scene canvas, normally the height of the background media
     */
    height?: number | undefined;
    /**
     * The proportion of canvas padding applied around the outside of the scene
     *       dimensions to provide additional buffer space
     */
    padding?: number | undefined;
    /**
     * The initial view coordinates for the scene
     */
    initial: {
        x: number | null;
        y: number | null;
        scale: number | null;
    };
    /**
     * The color of the canvas displayed behind the scene background
     */
    backgroundColor?: string | null | undefined;
    /**
     * Grid configuration for the scene
     */
    grid: GridData;
    /**
     * Do Tokens require vision in order to see the Scene environment?
     */
    tokenVision?: boolean | undefined;
    /**
     * Fog-exploration settings and other data
     */
    fog: {
        exploration: boolean;
        reset: number | null | undefined;
        overlay: string | null;
        colors: {
            explored: string | null;
            unexplored: string | null;
        };
    };
    /**
     * The environment data applied to the Scene.
     */
    environment: SceneEnvironmentData;
    /**
     * A collection of embedded Drawing objects.
     */
    drawings?: DrawingData[] | undefined;
    /**
     * A collection of embedded Tile objects.
     */
    tiles?: TileData[] | undefined;
    /**
     * A collection of embedded Token objects.
     */
    tokens?: TokenData[] | undefined;
    /**
     * A collection of embedded AmbientLight objects.
     */
    lights?: AmbientLightData[] | undefined;
    /**
     * A collection of embedded Note objects.
     */
    notes?: NoteData[] | undefined;
    /**
     * A collection of embedded AmbientSound objects.
     */
    sounds?: AmbientSoundData[] | undefined;
    /**
     * A collection of embedded Region objects.
     */
    regions?: RegionData[] | undefined;
    /**
     * A collection of embedded MeasuredTemplate objects.
     */
    templates?: MeasuredTemplateData[] | undefined;
    /**
     * A collection of embedded Wall objects
     */
    walls?: WallData[] | undefined;
    /**
     * A linked Playlist document which should begin automatically playing when this Scene
     * becomes active.
     */
    playlist: string | null;
    /**
     * A linked PlaylistSound document from the selected playlist that will begin
     * automatically playing when this Scene becomes active
     */
    playlistSound: string | null;
    /**
     * A JournalEntry document which provides narrative details about this Scene
     */
    journal: string | null;
    /**
     * A JournalEntry document which provides narrative details about this Scene
     */
    journalEntryPage: string | null;
    /**
     * A named weather effect which should be rendered in this Scene.
     */
    weather?: string | undefined;
    /**
     * The _id of a Folder which contains this Actor
     */
    folder: string | null;
    /**
     * The numeric sort value which orders this Actor relative to its siblings
     */
    sort?: number | undefined;
    /**
     * An object which configures ownership of this Scene
     */
    ownership?: object | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type GridData = {
    /**
     * The type of grid, a number from CONST.GRID_TYPES.
     */
    type?: number | undefined;
    /**
     * The grid size which represents the width (or height) of a single grid space.
     */
    size?: number | undefined;
    /**
     * The line style of the grid.
     */
    style?: string | undefined;
    /**
     * The thickness of the grid lines.
     */
    thickness?: number | undefined;
    /**
     * A string representing the color used to render the grid lines.
     */
    color?: string | undefined;
    /**
     * A number between 0 and 1 for the opacity of the grid lines.
     */
    alpha?: number | undefined;
    /**
     * The number of distance units which are represented by a single grid space.
     */
    distance?: number | undefined;
    /**
     * A label for the units of measure which are used for grid distance.
     */
    units?: string | undefined;
};
export type EnvironmentData = {
    /**
     * The normalized hue angle.
     */
    hue?: number | undefined;
    /**
     * The intensity of the tinting (0 = no tinting).
     */
    intensity?: number | undefined;
    /**
     * The luminosity.
     */
    luminosity?: number | undefined;
    /**
     * The saturation.
     */
    saturation?: number | undefined;
    /**
     * The strength of the shadows.
     */
    shadows?: number | undefined;
};
export type _GlobalLightData = {
    /**
     * Is the global light enabled?
     */
    enabled?: number | undefined;
    /**
     * Is the global light in bright mode?
     */
    bright?: boolean | undefined;
};
export type GlobalLightData = Pick<LightData, "alpha" | "color" | "coloration" | "contrast" | "luminosity" | "saturation" | "shadows" | "darkness"> & _GlobalLightData;
export type SceneEnvironmentData = {
    /**
     * The ambient darkness level in this Scene, where 0 represents midday (maximum
     * illumination) and 1 represents midnight (maximum darkness)
     */
    darknessLevel: number;
    /**
     * The darkness level lock state.
     */
    darknessLevelLock: boolean;
    /**
     * The global light data configuration.
     */
    globalLight: GlobalLightData;
    /**
     * If cycling between base and dark is activated.
     */
    cycle: boolean;
    /**
     * The base (darkness level 0) ambience lighting data.
     */
    base: EnvironmentData;
    /**
     * The dark (darkness level 1) ambience lighting data.
     */
    dark: EnvironmentData;
};
export type RegionData = {
    /**
     * The Region _id which uniquely identifies it within its parent Scene
     */
    _id: string | null;
    /**
     * The name used to describe the Region
     */
    name: string;
    /**
     * The color used to highlight the Region
     */
    color?: string | undefined;
    /**
     * The shapes that make up the Region
     */
    shapes?: BaseShapeData[] | undefined;
    /**
     * A collection of embedded RegionBehavior objects
     */
    behaviors?: RegionBehaviorData[] | undefined;
    /**
     * The elevation
     */
    elevation?: number | undefined;
    /**
     * The region visibility
     */
    visibility?: number | undefined;
    /**
     * Whether this region is locked or not
     */
    locked?: boolean | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
};
export type RegionBehaviorData = {
    /**
     * The _id which uniquely identifies this RegionBehavior document
     */
    _id: string | null;
    /**
     * The name used to describe the RegionBehavior
     */
    name?: string | undefined;
    /**
     * An RegionBehavior subtype which configures the system data model applied
     */
    type: string;
    /**
     * Data for a RegionBehavior subtype, defined by a System or Module
     */
    system: object;
    /**
     * Is the RegionBehavior currently disabled?
     */
    disabled?: boolean | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type RegionSocketEvent = {
    /**
     * The UUID of the Region the event was triggered on
     */
    regionUuid: string;
    /**
     * The ID of the User that triggered the event
     */
    userId: string;
    /**
     * The name of the event (see {@link CONST.REGION_EVENTS})
     */
    eventName: RegionEventType;
    /**
     * The data of the event
     */
    eventData: object;
    /**
     * The keys of the event data that are Documents
     */
    eventDataUuids: string[];
};
export type SettingData = {
    /**
     * The _id which uniquely identifies this Setting document
     */
    _id: string | null;
    /**
     * The setting key, a composite of {scope}.{name}
     */
    key: string;
    /**
     * The setting value, which is serialized to JSON
     */
    value: any;
    /**
     * The ID of the user this Setting belongs to, if user-scoped.
     */
    user?: string | undefined;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type TableResultData = {
    /**
     * The _id which uniquely identifies this TableResult embedded document
     */
    _id: string | null;
    /**
     * A result subtype from CONST.TABLE_RESULT_TYPES
     */
    type?: string | undefined;
    /**
     * The text which describes the table result
     */
    text?: string | undefined;
    /**
     * An image file url that represents the table result
     */
    img?: string | undefined;
    /**
     * A named collection from which this result is drawn
     */
    documentCollection?: string | undefined;
    /**
     * The _id of a Document within the collection this result references
     */
    documentId?: string | undefined;
    /**
     * The probabilistic weight of this result relative to other results
     */
    weight?: number | undefined;
    /**
     * A length 2 array of ascending integers which defines the range of dice roll
     *            totals which produce this drawn result
     */
    range?: number[] | undefined;
    /**
     * Has this result already been drawn (without replacement)
     */
    drawn?: boolean | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
};
export type TileRestrictionsData = {
    /**
     * Should we restricts light?
     */
    light?: boolean | undefined;
    /**
     * Should we restricts weather?
     */
    weather?: boolean | undefined;
};
export type TileOcclusionData = {
    /**
     * The occlusion mode from CONST.TILE_OCCLUSION_MODES
     */
    mode: number;
    /**
     * The occlusion alpha between 0 and 1
     */
    alpha: number;
};
export type TileVideoData = {
    /**
     * Automatically loop the video?
     */
    loop: boolean;
    /**
     * Should the video play automatically?
     */
    autoplay: boolean;
    /**
     * The volume level of any audio that the video file contains
     */
    volume: number;
};
export type TileData = {
    /**
     * The _id which uniquely identifies this Tile embedded document
     */
    _id: string | null;
    /**
     * An image or video texture which this tile displays.
     */
    texture?: TextureData | undefined;
    /**
     * The pixel width of the tile
     */
    width?: number | undefined;
    /**
     * The pixel height of the tile
     */
    height?: number | undefined;
    /**
     * The x-coordinate position of the top-left corner of the tile
     */
    x?: number | undefined;
    /**
     * The y-coordinate position of the top-left corner of the tile
     */
    y?: number | undefined;
    /**
     * The elevation of the tile
     */
    elevation?: number | undefined;
    /**
     * The z-index ordering of this tile relative to its siblings
     */
    sort?: number | undefined;
    /**
     * The angle of rotation for the tile between 0 and 360
     */
    rotation?: number | undefined;
    /**
     * The tile opacity
     */
    alpha?: number | undefined;
    /**
     * Is the tile currently hidden?
     */
    hidden?: boolean | undefined;
    /**
     * Is the tile currently locked?
     */
    locked?: boolean | undefined;
    /**
     * The tile's occlusion settings
     */
    occlusion?: TileOcclusionData | undefined;
    /**
     * The tile's restrictions settings
     */
    restrictions?: TileRestrictionsData | undefined;
    /**
     * The tile's video settings
     */
    video?: TileVideoData | undefined;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
};
export type TokenOcclusionData = {
    /**
     * Occlusion radius.
     */
    radius?: number | undefined;
};
export type TokenRingData = {
    /**
     * Dynamic Token ring is enabled?
     */
    enabled?: number | undefined;
    colors: {
        ring?: string | undefined;
        background?: string | undefined;
    };
    /**
     * Numerical bitmask to toggle effects. Default: 0x01
     */
    effects?: number | undefined;
    subject: {
        scale?: number | undefined;
        texture?: string | undefined;
    };
};
export type TokenData = {
    /**
     * The Token _id which uniquely identifies it within its parent Scene
     */
    _id: string | null;
    /**
     * The name used to describe the Token
     */
    name: string;
    /**
     * The display mode of the Token nameplate, from CONST.TOKEN_DISPLAY_MODES
     */
    displayName?: number | undefined;
    /**
     * The _id of an Actor document which this Token represents
     */
    actorId: string | null;
    /**
     * Does this Token uniquely represent a singular Actor, or is it one of many?
     */
    actorLink?: boolean | undefined;
    /**
     * The ActorDelta embedded document which stores the differences between this
     *      token and the base actor it represents.
     */
    delta?: ActorDeltaData | undefined;
    /**
     * The token's texture on the canvas.
     */
    texture: TextureData;
    /**
     * The width of the Token in grid units
     */
    width?: number | undefined;
    /**
     * The height of the Token in grid units
     */
    height?: number | undefined;
    /**
     * The shape of the Token
     */
    shape?: TokenShapeType | undefined;
    /**
     * The x-coordinate of the top-left corner of the Token
     */
    x?: number | undefined;
    /**
     * The y-coordinate of the top-left corner of the Token
     */
    y?: number | undefined;
    /**
     * The vertical elevation of the Token, in distance units
     */
    elevation?: number | undefined;
    /**
     * The sort order
     */
    sort?: number | undefined;
    /**
     * Is the Token currently locked? A locked token cannot be moved or rotated via
     *      standard keyboard or mouse interaction.
     */
    locked?: boolean | undefined;
    /**
     * Prevent the Token image from visually rotating?
     */
    lockRotation?: boolean | undefined;
    /**
     * The rotation of the Token in degrees, from 0 to 360. A value of 0 represents
     *         a southward-facing Token.
     */
    rotation?: number | undefined;
    /**
     * The opacity of the token image
     */
    alpha?: number | undefined;
    /**
     * Is the Token currently hidden from player view?
     */
    hidden?: boolean | undefined;
    /**
     * A displayed Token disposition from CONST.TOKEN_DISPOSITIONS
     */
    disposition?: number | undefined;
    /**
     * The display mode of Token resource bars, from CONST.TOKEN_DISPLAY_MODES
     */
    displayBars?: number | undefined;
    /**
     * The configuration of the Token's primary resource bar
     */
    bar1?: TokenBarData | undefined;
    /**
     * The configuration of the Token's secondary resource bar
     */
    bar2?: TokenBarData | undefined;
    /**
     * Configuration of the light source that this Token emits
     */
    light?: LightData | undefined;
    /**
     * Configuration of sight and vision properties for the Token
     */
    sight: TokenSightData;
    /**
     * An array of detection modes which are available to this Token
     */
    detectionModes: TokenDetectionMode<true>[];
    /**
     * Configuration of occlusion options
     */
    occludable: TokenOcclusionData;
    /**
     * Configuration of the Dynamic Token Ring
     */
    ring: TokenRingData;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    _movementHistory: object[];
    _regions: string[];
};
export type PrototypeTokenData = Omit<TokenData, "_id" | "actorId" | "delta" | "x" | "y" | "elevation" | "shape" | "sort" | "hidden" | "locked" | "_movementHistory" | "_regions">;
export type TokenSightData = {
    /**
     * Should vision computation and rendering be active for this Token?
     */
    enabled: boolean;
    /**
     * How far in distance units the Token can see without the aid of a light source.
     * If null, the sight range is unlimited.
     */
    range: number | null;
    /**
     * An angle at which the Token can see relative to their direction of facing
     */
    angle?: number | undefined;
    /**
     * The vision mode which is used to render the appearance of the visible area
     */
    visionMode?: string | undefined;
    /**
     * A special color which applies a hue to the visible area
     */
    color?: string | undefined;
    /**
     * A degree of attenuation which gradually fades the edges of the visible area
     */
    attenuation?: number | undefined;
    /**
     * An advanced customization for the perceived brightness of the visible area
     */
    brightness?: number | undefined;
    /**
     * An advanced customization of color saturation within the visible area
     */
    saturation?: number | undefined;
    /**
     * An advanced customization for contrast within the visible area
     */
    contrast?: number | undefined;
};
export type TokenDetectionMode<Source extends boolean = false> = {
    /**
     * The ID of the detection mode, a key from `CONFIG.Canvas.detectionModes`.
     */
    id: string;
    /**
     * Whether or not this detection mode is presently enabled.
     */
    enabled: boolean;
    /**
     * The maximum range in distance units at which this mode
     * can detect targets. If null, which is only possible for modes in the document source, the detection range is
     * unlimited. On document preparation null is converted to Infinity.
     */
    range: Source extends true ? number | null : number;
};
export type TokenBarData = {
    /**
     * The attribute path within the Token's Actor data which should be displayed
     */
    attribute?: string | undefined;
};
export type TokenPosition = {
    /**
     * The top-left x-coordinate in pixels (integer).
     */
    x: number;
    /**
     * The top-left y-coordinate in pixels (integer).
     */
    y: number;
    /**
     * The elevation in grid units.
     */
    elevation: number;
    /**
     * The width in grid spaces (positive).
     */
    width: number;
    /**
     * The height in grid spaces (positive).
     */
    height: number;
    /**
     * The shape type (see {@link CONST.TOKEN_SHAPES}).
     */
    shape: TokenShapeType;
};
export type TokenDimensions = Pick<TokenPosition, "width" | "height" | "shape">;
/**
 * The hexagonal offsets of a Token.
 */
export type TokenHexagonalOffsetsData = {
    /**
     * The occupied offsets in an even grid in the 0th row/column
     */
    even: GridOffset2D[];
    /**
     * The occupied offsets in an odd grid in the 0th row/column
     */
    odd: GridOffset2D[];
    /**
     * The anchor in normalized coordiantes
     */
    anchor: Point;
};
/**
 * The hexagonal shape of a Token.
 */
export type TokenHexagonalShapeData = {
    /**
     * The occupied offsets in even/odd rows/columns
     */
    offsets: {
        even: GridOffset2D[];
        odd: GridOffset2D[];
    };
    /**
     * The points in normalized coordinates
     */
    points: number[];
    /**
     * The center of the shape in normalized coordiantes
     */
    center: Point;
    /**
     * The snapping anchor in normalized coordiantes, i.e.
     * the top-left grid hex center in the snapped position
     */
    anchor: Point;
};
export type UserData = {
    /**
     * The _id which uniquely identifies this User document.
     */
    _id: string | null;
    /**
     * The user's name.
     */
    name: string;
    /**
     * The user's password. Available only on the Server side for security.
     */
    password: string;
    /**
     * The user's password salt. Available only on the Server side for security.
     */
    passwordSalt: string;
    /**
     * The user's avatar image.
     */
    avatar: string | null;
    /**
     * A linked Actor document that is this user's impersonated character.
     */
    character: ActorData;
    /**
     * A color to represent this user.
     */
    color: string;
    /**
     * The user's personal pronouns.
     */
    pronouns: string;
    /**
     * A mapping of hotbar slot number to Macro id for the user.
     */
    hotbar: object;
    /**
     * The user's individual permission configuration, see CONST.USER_PERMISSIONS.
     */
    permissions: object;
    /**
     * The user's role, see CONST.USER_ROLES.
     */
    role: number;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
    /**
     * An object of creation and access information
     */
    _stats: DocumentStats;
};
export type WallData = {
    /**
     * The _id which uniquely identifies the embedded Wall document
     */
    _id: string | null;
    /**
     * The wall coordinates, a length-4 array of finite numbers [x0,y0,x1,y1]
     */
    c: number[];
    /**
     * The illumination restriction type of this wall
     */
    light?: number | undefined;
    /**
     * The movement restriction type of this wall
     */
    move?: number | undefined;
    /**
     * The visual restriction type of this wall
     */
    sight?: number | undefined;
    /**
     * The auditory restriction type of this wall
     */
    sound?: number | undefined;
    /**
     * The direction of effect imposed by this wall
     */
    dir?: number | undefined;
    /**
     * The type of door which this wall contains, if any
     */
    door?: number | undefined;
    /**
     * The type of door sound to play, if any
     */
    doorSound?: string | undefined;
    /**
     * The state of the door this wall contains, if any
     */
    ds?: number | undefined;
    /**
     * Configuration of threshold data for this wall
     */
    threshold: WallThresholdData;
    /**
     * An object of optional key/value flags
     */
    flags: DocumentFlags;
};
export type WallThresholdData = {
    /**
     * Minimum distance from a light source for which this wall blocks light
     */
    light?: number | undefined;
    /**
     * Minimum distance from a vision source for which this wall blocks vision
     */
    sight?: number | undefined;
    /**
     * Minimum distance from a sound source for which this wall blocks sound
     */
    sound?: number | undefined;
    /**
     * Whether to attenuate the source radius when passing through the wall
     */
    attenuation?: boolean | undefined;
};
import type { DocumentFlags } from "../data/_types.mjs";
import type { DocumentStats } from "../data/_types.mjs";
import type { LightData } from "../data/data.mjs";
import type { ChatMessageStyle } from "../constants.mjs";
import type { ShapeData } from "../data/data.mjs";
import type { TextureData } from "../data/data.mjs";
import type { BaseShapeData } from "../data/data.mjs";
import type { RegionEventType } from "../constants.mjs";
import type { TokenShapeType } from "../constants.mjs";
import type { GridOffset2D } from "../grid/_types.mjs";
import type { Point } from "../_types.mjs";
