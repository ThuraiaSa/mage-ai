from typing import Dict

from mage_ai.command_center.constants import (
    ApplicationExpansionUUID,
    ApplicationType,
    InteractionType,
    ItemType,
    ObjectType,
)
from mage_ai.command_center.presenters.text import application_title
from mage_ai.command_center.shared.utils import (
    build_action_fetch_items,
    build_application_expansion,
    build_generic,
)
from mage_ai.version_control.models import File


async def build_close_application(uuid: ApplicationExpansionUUID) -> Dict:
    title = application_title(uuid)

    return dict(
        uuid=f'close_application_{uuid}',
        item_type=ItemType.ACTION,
        object_type=ObjectType.APPLICATION_EXPANSION,
        title=f'Close {title} application',
        subtitle='Close app',
        display_settings_by_attribute=dict(
            icon=dict(color_uuid='monotone.whiteTransparent', icon_uuid='CubeWithArrowDown'),
        ),
        actions=[
            dict(
                interaction=dict(
                    type=InteractionType.CLOSE_APPLICATION,
                ),
            ),
            dict(
                interaction=dict(
                    type=InteractionType.FETCH_ITEMS,
                ),
            ),
        ],
        metadata=dict(
            application=dict(
                application_type=ApplicationType.EXPANSION,
                uuid=uuid,
            ),
        ),
        settings=dict(cache_expires_at=0),
    )


async def build_application_arcane_library() -> Dict:
    return build_generic(model_class=File, item_dict=dict(
        item_type=ItemType.DETAIL,
        object_type=ObjectType.FILE,
        title='Arcane Library',
        description='browse and edit files across all projects',
        subtitle='Browser / Editor',
        applications=[
            build_application_expansion(
                model_class=File,
                expansion_settings=dict(
                    uuid=ApplicationExpansionUUID.ArcaneLibrary,
                ),
                actions=[
                    build_action_fetch_items({}),
                ],
            ),
        ],
        display_settings_by_attribute=dict(
            description=dict(text_styles=dict(monospace=False)),
            icon=dict(color_uuid='accent.sky', icon_uuid='RankingV3'),
            subtitle=dict(
                text_styles=dict(
                    monospace=True,
                ),
            ),
        ),
        settings=dict(cache_expires_at=0),
    ))